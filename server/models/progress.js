const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  title: String,
  percent: Number,
  id: String,
  progressElements: [
    {
      id: String,
      passed: Boolean,
    },
  ],
});

module.exports = mongoose.model("Progress", progressSchema);
