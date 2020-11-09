const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: String,
  postId: String,
  username: String,
  timestamp: Number,
  likes: Number,
  dislikes: Number,
  title: String,
  text: String,
  accompaniedURL: String,
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
});

module.exports = mongoose.model("Post", postSchema);
