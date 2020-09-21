import React from "react";

interface Props {
  userId: number;
  username: string;
  descriptor: string;
}

const FollowerElement: React.FC<Props> = (props) => {
  return (
    <div className="follower_element">
      <p className="follower_element_username">{props.username}</p>
      <p className="follower_element_descriptor">{props.descriptor}</p>
    </div>
  );
};

export default FollowerElement;
