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
    <div>
      <p>{props.username}</p>
      <p>posted at {props.timestamp}</p>
      <p>{props.text}</p>
      <p>
        likes: {props.likes}, dislikes: {props.dislikes}
      </p>
    </div>
  );
};

export default IndividualComment;
