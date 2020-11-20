const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stockId: String,
  ticker: String,
  title: String,
  description: String,
  country: String,
  sector: String,
  comments: [
    {
      userId: String,
      commentId: String,
      username: String,
      timestamp: Number,
      text: String,
      likes: Number,
      dislikes: Number,
      subComments: {
        userId: String,
        commentId: String,
        username: String,
        timestamp: Number,
        text: String,
        likes: Number,
        dislikes: Number,
      },
    },
  ],
});

module.exports = mongoose.model("Stock", stockSchema);
