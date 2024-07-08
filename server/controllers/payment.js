const Razorpay = require("razorpay");
const crypto = require("crypto");
const { getConnection } = require("../models/db");
require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const createOrder = async (req, res) => {
  const { amount, userId, salonId, serviceId, appointmentDate, userEmail } =
    req.body;
  console.log("createOrder request body:", req.body);

  const options = {
    amount: amount * 100, // Convert to paise
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log("Razorpay order response:", response);

    const order = {
      user_id: userId,
      salon_id: salonId,
      service_id: serviceId,
      appointment_date: appointmentDate,
      email: userEmail,
      amount: amount,
      payment_status: "Pending",
      order_id: response.id,
    };
    console.log("i m here");

    const connection = await getConnection();
    connection.query("INSERT INTO orders SET ?", order, (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ message: "Database error", error });
      }

      connection.release();
    });
    res.status(200).json({
      id: response.id,
      amount: response.amount,
      currency: response.currency,
    });
  } catch (error) {
    console.error("Razorpay error:", error);
    res.status(500).json({ message: "Razorpay error", error });
  }
};

const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  console.log("verifyPayment request body:", req.body);

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    const connection = await getConnection();
    connection.query(
      "UPDATE orders SET payment_status = ?, payment_id = ?, payment_signature = ? WHERE order_id = ?",
      ["Completed", razorpay_payment_id, razorpay_signature, razorpay_order_id],
      (error, results) => {
        connection.release();
        if (error) {
          console.error("Database error:", error);
          return res.status(500).json({ message: "Database error", error });
        }
      }
    );
    res.status(200).json({ message: "Payment verified" });
  } else {
    console.error("Invalid signature:", {
      expectedSignature,
      razorpay_signature,
    });
    res.status(400).json({ message: "Invalid signature" });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
};
