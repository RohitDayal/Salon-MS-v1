const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const Razorpay = require("razorpay");

const addSaloonRoute = require("./routes/addSaloon");
const usersRoute = require("./routes/users");
const createSaloon = require("./routes/createSaloon");
const dataServices = require("./routes/dataServices");
const booking = require("./routes/booking");
const paymentRoutes = require("./routes/payment");
const createTables = require("./models/createTables");

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "client", "build")));
// app.use((req, res, next) => {
//   console.log(`${req.method} request for ${req.url}`);
//   next();
// });
app.use("/api/payment", paymentRoutes);
app.use("/api/salon/booking", booking);
app.use("/api/salon", dataServices);
app.use("/api", dataServices);
app.use("/create-saloon", createSaloon);
app.use("/users", usersRoute);

// const razorpay = new Razorpay({
//   key_id: "rzp_test_ckSYAx32pq1y0r",
//   key_secret: "2XXpJvVqrv3IZbfvCDzXp0Ws",
// });

app.post("/api/payment/create", async (req, res) => {
  const payment_capture = 1;
  const amount = req.body.amount; // Amount in paise
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: "receipt_order_74394",
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occurred");
  }
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

// Ensure tables are created before starting the server
const port = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await createTables();
    app.listen(port, () => {
      console.log(`Server listening at port:${port}`);
    });
  } catch (error) {
    console.error("Failed to initialize the server:", error);
  }
};

startServer();
