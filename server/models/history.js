const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  text: String,
  id: String,
  type: String,
  timestamp: Number,
  postId: String,
});

module.exports = mongoose.model("History", historySchema);
