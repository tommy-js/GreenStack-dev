const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shareSchema = new Schema({
  stockId: Number,
  shareId: Number,
  shares: Number,
});

module.exports = mongoose.model("Share", shareSchema);
