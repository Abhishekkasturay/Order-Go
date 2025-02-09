import React from "react";
import axios from "axios";

const PaymentPage = () => {
  const handlePayment = async () => {
    try {
      // Step 1: Create order from backend
      const { data } = await axios.post("https://order-go.onrender.com/api/payment", {
        amount: 50000, // Amount in paise (₹500)
      });

      // Step 2: Open Razorpay payment window
      const options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay Key ID
        amount: data.amount,
        currency: "INR",
        name: "Order & Go",
        description: "Food Order Payment",
        order_id: data.id,
        handler: function (response) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Complete Your Payment</h1>
      <button
        onClick={handlePayment}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Pay ₹500
      </button>
    </div>
  );
};

export default PaymentPage;
