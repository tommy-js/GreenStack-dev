const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referenceTradeSchema = new Schema({
  tradeAuthorUsername: String,
  tradeAuthorID: Number,
  id: Number,
  ticker: String,
  title: String,
  timestamp: Number,
  shares: Number,
  gain: Number,
});

module.exports = mongoose.model("Reference", referenceTradeSchema);
