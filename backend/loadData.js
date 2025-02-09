const mongoose = require("mongoose");
const fs = require("fs");
const Train = require("./models/Train");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {});

const loadData = async () => {
  try {
    const data = JSON.parse(fs.readFileSync("./trains.json", "utf8")); // Ensure the path is correct
    await Train.deleteMany({});
    await Train.insertMany(data);
    console.log("Data loaded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error loading data:", err);
    mongoose.connection.close();
  }
};

loadData();
