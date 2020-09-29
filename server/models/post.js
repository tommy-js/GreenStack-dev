const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: String,
  postId: String,
  timestamp: Number,
  likes: Number,
  dislikes: Number,
  title: String,
  text: String,
});

module.exports = mongoose.model("Post", postSchema);
