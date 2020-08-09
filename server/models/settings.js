const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
  darkmode: Boolean,
  invisible: Boolean,
  allowCommentsOnTrades: Boolean,
});

module.exports = mongoose.model("Settings", settingsSchema);
