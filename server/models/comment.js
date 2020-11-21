const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: String,
  commentId: String,
  username: String,
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
});

module.exports = mongoose.model("Comment", commentSchema);
