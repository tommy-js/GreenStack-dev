const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  points: [
    {
      x: String,
      y: String,
    },
  ],
});

module.exports = mongoose.model("Data", dataSchema);
