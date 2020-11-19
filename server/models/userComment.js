const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userCommentSchema = new Schema({
  userId: String,
  commentId: String,
  username: String,
  profileImage: String,
  timestamp: Number,
  text: String,
  likes: Number,
  dislikes: Number,
  reference: {
    postId: String,
    text: String,
  },
});

module.exports = mongoose.model("UserComment", userCommentSchema);
