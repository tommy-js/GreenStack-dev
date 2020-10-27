const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSetSchema = new Schema({
  title: String,
  elements: [
    {
      x: String,
      y: String,
    },
  ],
});

module.exports = mongoose.model("pointSet", pointSetSchema);
