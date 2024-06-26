const mongoose = require("mongoose");

const ProSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  img: String,
  sold: String,
  dateOfSale: String,
}, {
    collection: 'transactions' // specify the collection name here
  });

const UserModel = mongoose.model("Product", ProSchema);
module.exports = UserModel;
