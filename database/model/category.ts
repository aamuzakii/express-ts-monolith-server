const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  parent_category_id: { type: String, required: true },
});

module.exports = mongoose.model("Product", schema);
