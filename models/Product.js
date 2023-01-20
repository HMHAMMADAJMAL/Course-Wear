const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  slug: { type: String, required: true, unique: true },
  desc: { type: String },
  img: { type: String },
  category: { type: String },
  size: { type: String },
  color: { type: String },
  price: { type: String },
  avalaibilQty: { type: String },

}, { timestamps: true });
mongoose.models = {}
export default mongoose.model("Product", ProductSchema);