import React from "react";
import CommentSectionInput from "./CommentSectionInput";
import Comments from "./Comments";

interface Props {
  id: string;
  comments: any;
}

const CommentSection: React.FC<Props> = (props) => {
  return (
    <div id="comment_section">
      <h3 id="comment_section_header">Leave a comment</h3>
      <CommentSectionInput id={props.id} />
      <Comments comments={props.comments} />
    </div>
  );
};

export default CommentSection;
