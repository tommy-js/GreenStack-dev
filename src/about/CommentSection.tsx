import React from "react";
import CommentSectionInput from "./CommentSectionInput";
import Comments from "./Comments";

const CommentSection: React.FC = () => {
  return (
    <div>
      <CommentSectionInput />
      <Comments />
    </div>
  );
};

export default CommentSection;
