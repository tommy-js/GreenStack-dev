const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
  newLog: Boolean,
  newPortfolio: Boolean,
});

module.exports = mongoose.model("NewUser", newUserSchema);
