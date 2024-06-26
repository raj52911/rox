require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const Routes = require("./routes/sort"); // Adjust the path to match your file structure

mongoose.connect('mongodb://127.0.0.1:27017/mern', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.use("/api", Routes);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
