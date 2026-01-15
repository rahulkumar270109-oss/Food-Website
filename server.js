const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "YOUR_MONGODB_URL_HERE"
).then(() => {
  console.log("Database Connected");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
