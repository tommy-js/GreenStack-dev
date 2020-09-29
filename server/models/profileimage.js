const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileImageSchema = new Schema({
  id: String,
  url: String,
});

module.exports = mongoose.model(profileImageSchema, "ProfileImage");
