import React from "react";
import CommentSectionInput from "./CommentSectionInput";
import Comments from "./Comments";

interface Props {
  id: string;
  comments: any;
}

const CommentSection: React.FC<Props> = (props) => {
  return (
    <div>
      <CommentSectionInput id={props.id} />
      <Comments comments={props.comments} />
    </div>
  );
};

export default CommentSection;
