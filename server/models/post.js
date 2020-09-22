const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: Number,
  postId: Number,
  timestamp: Number,
  likes: Number,
  dislikes: Number,
  title: String,
  text: String,
});

module.exports = mongoose.model("Post", postSchema);
