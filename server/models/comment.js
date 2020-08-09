const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: String,
  username: String,
  timestamp: Number,
  text: String,
  likes: Number,
  dislikes: Number,
});

module.exports = mongoose.model("Comment", commentSchema);
