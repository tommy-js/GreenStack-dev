import React from "react";
import PushComment from "../resolvers/PushComment";

const CommentInput: React.FC = () => {
  return (
    <div id="comment_input_div">
      <textarea id="comment_input" />
      <PushComment />
    </div>
  );
};

export default CommentInput;
