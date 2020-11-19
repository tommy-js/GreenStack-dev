const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postReferenceSchema = new Schema({
  postId: String,
  text: String,
});

module.exports = mongoose.model("PostReference", postReferenceSchema);
