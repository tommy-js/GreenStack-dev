const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  username: String,
  token: String,
  hash: String,
  salt: String,
  money: Number,
  darkmode: Boolean,
  invisible: Boolean,
  membership: Boolean,
  newaccount: Boolean,
  allowCommentsOnTrades: Boolean,
  profileImage: String,
  following: [{ userId: String, username: String }],
  followers: [
    { followerId: String, followerName: String, blocked: Boolean, id: String },
  ],
  stocks: [
    {
      stockId: String,
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
  shares: [{ stockId: String, shares: Number }],
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
      id: String,
      viewed: Boolean,
    },
  ],
  progress: [
    {
      title: String,
      percent: Number,
      id: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
