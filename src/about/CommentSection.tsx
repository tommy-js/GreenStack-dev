import React, { useEffect, useState } from "react";
import CommentSectionInput from "./CommentSectionInput";
import Comments from "./Comments";

interface Props {
  id: string;
  comments: any;
}

const CommentSection: React.FC<Props> = (props) => {
  const [comments, setComments] = useState([] as any);

  useEffect(() => {
    if (props.comments.length > 0) {
      setComments(props.comments);
    }
  }, [props.comments]);

  function commentSuccessfullyPushed(
    text: string,
    timestamp: number,
    username: string
  ) {
    let arr = [...comments];
    let obj = {
      text: text,
      timestamp: timestamp,
      username: username,
    };
    arr.push(obj);
    setComments(arr);
  }

  return (
    <div id="comment_section">
      <h3 id="comment_section_header">Leave a comment</h3>
      <CommentSectionInput
        commentSuccessfullyPushed={commentSuccessfullyPushed}
        id={props.id}
      />
      <Comments comments={comments} />
    </div>
  );
};

export default CommentSection;
