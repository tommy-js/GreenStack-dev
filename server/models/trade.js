const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
  tradeId: Number,
  ticker: String,
  title: String,
  userId: String,
  username: String,
  price: Number,
  type: String,
  timestamp: Number,
  shares: Number,
  gain: Number,
  comments: [
    {
      userId: String,
      username: String,
      timestamp: Number,
      text: String,
      likes: Number,
      dislikes: Number,
    },
  ],
});

module.exports = mongoose.model("Trade", tradeSchema);
