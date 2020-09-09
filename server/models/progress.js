const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  title: String,
  progress: Number,
  id: Number,
});

module.exports = mongoose.model("Progress", progressSchema);
