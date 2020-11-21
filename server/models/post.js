const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: String,
  postId: String,
  profileImage: String,
  postImage: String,
  username: String,
  timestamp: Number,
  likes: Number,
  dislikes: Number,
  title: String,
  text: String,
  accompaniedURL: String,
  allowComments: Boolean,
  allowLikes: Boolean,
  comments: [
    {
      userId: String,
      username: String,
      commentId: String,
      timestamp: Number,
      text: String,
      likes: Number,
      dislikes: Number,
      subComments: [
        {
          userId: String,
          commentId: String,
          username: String,
          timestamp: Number,
          text: String,
          likes: Number,
          dislikes: Number,
          parentCommentId: String,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
