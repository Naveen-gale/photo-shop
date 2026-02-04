const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  imageName: { type: String, required: true },
  fileId: { type: String, required: true },   // needed to delete from ImageKit
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Photo", photoSchema);
