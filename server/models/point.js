const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  x: String,
  y: String,
});

module.exports = mongoose.model("Point", pointSchema);
