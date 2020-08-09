const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  followerId: Number,
  followerName: String,
});

module.exports = mongoose.model("Follower", followerSchema);
