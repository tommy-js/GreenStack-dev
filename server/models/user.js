const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  username: String,
  bio: String,
  token: String,
  hash: String,
  salt: String,
  money: Number,
  darkmode: Boolean,
  invisible: Boolean,
  membership: Boolean,
  newaccount: Boolean,
  experience: Number,
  education: Number,
  motivations: Number,
  commentary: Number,
  allowCommentsOnPosts: Boolean,
  profileImage: String,
  history: [
    {
      text: String,
      id: String,
      style: String,
      timestamp: Number,
    },
  ],
  posts: [
    {
      userId: String,
      postId: String,
      username: String,
      timestamp: Number,
      likes: Number,
      dislikes: Number,
      title: String,
      text: String,
      accompaniedURL: String,
      allowComments: Boolean,
      allowLikes: Boolean,
      comments: [
        {
          userId: String,
          username: String,
          commentId: String,
          timestamp: Number,
          text: String,
          likes: Number,
          dislikes: Number,
        },
      ],
    },
  ],
  following: [{ userId: String, username: String, bio: String }],
  followers: [{ followerId: String, followerName: String, blocked: Boolean }],
  stocks: [
    {
      stockId: String,
      stockTitle: String,
      shares: Number,
      color: String,
      ticker: String,
    },
  ],
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
          commentId: String,
          text: String,
          likes: Number,
          dislikes: Number,
        },
      ],
    },
  ],
  watchlist: [
    {
      stockId: String,
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
      commentId: String,
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
      progressElements: [
        {
          id: String,
          passed: Boolean,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
