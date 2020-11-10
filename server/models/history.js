const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  text: String,
  id: String,
  type: String,
  timestamp: Number,
});

module.exports = mongoose.model("History", historySchema);
