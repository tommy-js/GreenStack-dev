import React from "react";

interface Props {
  userId: number;
  username: string;
  descriptor: string;
}

const FollowerElement: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.descriptor}</p>
    </div>
  );
};

export default FollowerElement;
