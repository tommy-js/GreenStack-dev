import React, { useState } from "react";
import LikeComponent from "./LikeComponent";

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
      <LikeComponent likes={props.likes} dislikes={props.dislikes} />
    </div>
  );
};

export default Comment;
