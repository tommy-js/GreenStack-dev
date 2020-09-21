import React, { useContext } from "react";
import UnfollowUser from "../resolvers/UnfollowUser";
import { userContext } from "../AppMain/App";

interface Props {
  userId: number;
  username: string;
  descriptor: string;
}

const FollowingElement: React.FC<Props> = (props) => {
  const { userVal } = useContext(userContext);

  return (
    <div className="following_element">
      <p className="following_element_username">{props.username}</p>
      <p className="following_element_descriptor">{props.descriptor}</p>
      <UnfollowUser userId={userVal.userId} followerId={props.userId} />
    </div>
  );
};

export default FollowingElement;
