import React, { useEffect, useState } from "react";
import { CommentSectionInput } from "../CommentSectionInput/CommentSectionInput";
import { Comments } from "../Comments/Comments";
import { CommentItem } from "../../types/types";

interface Props {
  id: string;
  comments: CommentItem[];
}

export const CommentSection: React.FC<Props> = (props) => {
  const [comments, setComments] = useState([] as any);

  useEffect(() => {
    if (props.comments.length > 0) setComments(props.comments);
  }, [props.comments]);

  return (
    <div id="comment_section">
      <h3 id="comment_section_header">Leave a comment</h3>
      <CommentSectionInput id={props.id} />
      <Comments comments={comments} />
    </div>
  );
};
