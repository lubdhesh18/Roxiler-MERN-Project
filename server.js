const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/transactionsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const transactionSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  category: String,
  sold: Boolean,
  dateOfSale: Date,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

app.listen(5000, () => console.log("Server running on port 5000"));
