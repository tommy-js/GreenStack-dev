import React, { useContext } from "react";
import UnfollowUser from "../resolvers/UnfollowUser";
import { Link } from "react-router-dom";

interface Props {
  userId: string;
  username: string;
  bio: string;
}

const FollowingElement: React.FC<Props> = (props) => {
  return (
    <div className="homepage_block_component">
      <Link className="block_link" to={`/home/user/${props.userId}`}>
        <p className="element_username">
          {props.username} id: {props.userId}
        </p>
      </Link>
      <p className="following_element_descriptor">{props.bio}</p>
      <UnfollowUser userId={props.userId} />
    </div>
  );
};

export default FollowingElement;
