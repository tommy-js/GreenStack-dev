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
  newUser: {
    newLog: Boolean,
    newPortfolio: Boolean,
  },
  experience: Number,
  education: Number,
  motivations: Number,
  commentary: Number,
  allowCommentsOnPosts: Boolean,
  profileImage: String,
  posts: [
    {
      userId: String,
      postId: String,
      profileImage: String,
      postImage: String,
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
          subComments: [
            {
              userId: String,
              commentId: String,
              username: String,
              timestamp: Number,
              text: String,
              likes: Number,
              dislikes: Number,
              parentCommentId: String,
            },
          ],
        },
      ],
    },
  ],
  likes: [
    {
      userId: String,
      username: String,
      profileImage: String,
      likeId: String,
      timestamp: Number,
      text: String,
      reference: {
        postId: String,
        text: String,
        username: String,
        profileImage: String,
      },
    },
  ],
  comments: [
    {
      userId: String,
      username: String,
      timestamp: Number,
      commentId: String,
      profileImage: String,
      text: String,
      likes: Number,
      dislikes: Number,
      referenceId: String,
      reference: {
        postId: String,
        text: String,
        username: String,
        profileImage: String,
      },
    },
  ],
  following: [{ userId: String, username: String, bio: String }],
  followers: [{ followerId: String, followerName: String, blocked: Boolean }],
  stocks: [
    {
      stockId: String,
      title: String,
      shares: Number,
      color: String,
      ticker: String,
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
