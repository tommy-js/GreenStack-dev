import React from "react";

interface Props {
  username: string;
  text: string;
  timestamp: number;
}

const IndividualComment: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>{props.username}</h3>
      <p>{props.text}</p>
      <h4>Posted at {props.timestamp}</h4>
    </div>
  );
};

export default IndividualComment;
