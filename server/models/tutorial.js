const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
  id: String,
  comments: [
    {
      userId: String,
      username: String,
      commentId: String,
      timestamp: Number,
      text: String,
      likes: Number,
      dislikes: Number,
    },
  ],
});

module.exports = mongoose.model("Tutorial", tutorialSchema);
