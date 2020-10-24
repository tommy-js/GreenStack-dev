const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shareSchema = new Schema({
  stockId: String,
  stockTitle: String,
  shares: Number,
  color: String,
});

module.exports = mongoose.model("Share", shareSchema);
