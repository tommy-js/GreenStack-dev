const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  followerId: Number,
  followerName: String,
  id: Number,
  blocked: Boolean,
});

module.exports = mongoose.model("Follower", followerSchema);
