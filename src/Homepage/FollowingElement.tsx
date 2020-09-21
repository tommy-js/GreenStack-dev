import React from "react";

interface Props {
  userId: number;
  username: string;
  descriptor: string;
}

const FollowingElement: React.FC<Props> = (props) => {
  return (
    <div className="following_element">
      <p>{props.username}</p>
      <p>{props.descriptor}</p>
    </div>
  );
};

export default FollowingElement;
