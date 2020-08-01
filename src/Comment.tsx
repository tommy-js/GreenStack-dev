import React from "react";

interface Props {
  user: string;
  comment: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

const Comment: React.FC<Props> = (props) => {
  return (
    <div id="comment">
      <p>
        {props.user} at {props.timestamp}
      </p>
      <p>{props.comment}</p>
      <p>
        {props.likes} / {props.dislikes}
      </p>
    </div>
  );
};

export default Comment;
