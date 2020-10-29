const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsArticleSchema = new Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  publishedAt: String,
  content: String,
});

module.exports = mongoose.model("NewsArticle", newsArticleSchema);
