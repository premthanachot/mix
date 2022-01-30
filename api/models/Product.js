const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: String, required: true },
    price: { type: Number, required: true},
    size: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);