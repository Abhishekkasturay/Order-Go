require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const Razorpay = require("razorpay");
const authRoutes = require("./routes/auth");

const app = express();

// Enable CORS for frontend
app.use(
  cors({
    origin: "https://orderandgo-3.onrender.com", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Debug: Print the MongoDB URI to verify it's being loaded correctly
console.log("MongoDB URI:", process.env.MONGODB_URI);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Use routes for authentication
app.use("/api/auth", authRoutes);

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Replace with Razorpay Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Replace with Razorpay Secret Key
});

// Payment Route
app.post("/api/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      payment_capture: 1, // Auto capture payment
    });
    res.json(order);
  } catch (error) {
    console.error("Payment Error:", error);
    res.status(500).json({ error: "Error creating Razorpay order" });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
