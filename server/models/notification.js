const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  content: String,
  timestamp: Number,
  id: String,
  viewed: Boolean,
});

module.exports = mongoose.model("Notification", notificationSchema);
