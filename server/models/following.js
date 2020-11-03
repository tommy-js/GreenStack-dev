const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followingSchema = new Schema({
  userId: String,
  username: String,
  bio: String,
});

module.exports = mongoose.model("Following", followingSchema);
