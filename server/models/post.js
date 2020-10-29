const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  typeId: Number,
  dataId: String,
  userId: String,
  postId: String,
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
