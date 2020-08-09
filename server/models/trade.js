const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
  ticker: String,
  title: String,
  timestamp: Number,
  shares: Number,
  gain: Number,
});

module.exports = mongoose.model("Trade", tradeSchema);
