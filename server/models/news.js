const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  text: String,
  timestamp: Number,
});

module.exports = mongoose.model("News", newsSchema);
