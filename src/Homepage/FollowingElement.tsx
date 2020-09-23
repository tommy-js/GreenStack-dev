import React, { useContext } from "react";
import UnfollowUser from "../resolvers/UnfollowUser";
import { Link } from "react-router-dom";
import { userContext } from "../AppMain/App";

interface Props {
  userId: number;
  username: string;
  descriptor: string;
}

const FollowingElement: React.FC<Props> = (props) => {
  const { userVal } = useContext(userContext);

  return (
    <div className="homepage_block_component">
      <Link className="block_link" to={`/home/user/${props.userId}`}>
        <p className="element_username">{props.username}</p>
      </Link>
      <p className="following_element_descriptor">{props.descriptor}</p>
      <UnfollowUser userId={userVal.userId} followerId={props.userId} />
    </div>
  );
};

export default FollowingElement;
