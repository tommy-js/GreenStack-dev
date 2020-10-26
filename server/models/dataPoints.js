const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataPointsSchema = new Schema({
  label: String,
  value: Number,
});

module.exports = mongoose.model("DataPoint", dataPointsSchema);
