const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: Number,
  username: String,
  password: String,
  money: Number,
  darkmode: Boolean,
  invisible: Boolean,
  allowCommentsOnTrades: Boolean,
  profileImage: String,
  followed: [{ userId: Number, username: String }],
  followers: [
    { followerId: Number, followerName: String, blocked: Boolean, id: Number },
  ],
  stocks: [
    {
      stockId: Number,
      ticker: String,
      name: String,
      about: String,
      creation: String,
      prediction: Number,
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
    },
  ],
  shares: [{ stockId: Number, shares: Number }],
  trades: [
    {
      tradeId: Number,
      ticker: String,
      title: String,
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
    },
  ],
  referenceTrades: [
    {
      tradeAuthorUsername: String,
      tradeAuthorID: Number,
      ticker: String,
      title: String,
      timestamp: Number,
      shares: Number,
      gain: Number,
    },
  ],
  watchlist: [
    {
      stockId: Number,
      title: String,
      ticker: String,
      timestamp: Number,
    },
  ],
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
  notifications: [
    {
      content: String,
      timestamp: Number,
      id: Number,
      viewed: Boolean,
    },
  ],
  progress: [
    {
      title: String,
      progress: Number,
      id: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
