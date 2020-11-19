const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postReferenceSchema = new Schema({
  postId: String,
  text: String,
  username: String,
  profileImage: String,
});

module.exports = mongoose.model("PostReference", postReferenceSchema);
