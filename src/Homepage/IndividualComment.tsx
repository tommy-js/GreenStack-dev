import React from "react";

interface Props {
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

const IndividualComment: React.FC<Props> = (props) => {
  return (
    <div id="comment">
      <p id="comment_name">{props.username} </p>
      <p id="comment_time">posted at {props.timestamp}</p>
      <p id="comment_text">{props.text}</p>
      <p id="comment_information">
        likes: {props.likes}, dislikes: {props.dislikes}
      </p>
    </div>
  );
};

export default IndividualComment;
