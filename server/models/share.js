const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shareSchema = new Schema({
  stockId: String,
  shareId: String,
  shares: Number,
});

module.exports = mongoose.model("Share", shareSchema);
