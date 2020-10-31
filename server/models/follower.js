const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  followerId: String,
  followerName: String,
  blocked: Boolean,
});

module.exports = mongoose.model("Follower", followerSchema);
