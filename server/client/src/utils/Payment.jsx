import React from "react";

const Payment = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Fetch order from backend
    const data = await fetch("http://localhost:5000/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    const options = {
      key: "rzp_test_ckSYAx32pq1y0r", // Enter the Key ID generated from the Dashboard
      amount: data.amount.toString(),
      currency: data.currency,
      name: "saLoon",
      description: "Test Transaction",
      image: "/android-chrome-192x192.png",
      order_id: data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#00aeb7",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button onClick={displayRazorpay}>Pay Now</button>
    </div>
  );
};

export default Payment;
