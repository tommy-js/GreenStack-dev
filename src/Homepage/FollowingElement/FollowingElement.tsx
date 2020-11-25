import React from "react";
import { UnfollowUser } from "../UnfollowUser/UnfollowUser";
import { Link } from "react-router-dom";

interface Props {
  userId: string;
  username: string;
  bio: string;
}

export const FollowingElement: React.FC<Props> = (props) => {
  return (
    <div className="homepage_block_component">
      <Link
        className="block_link element_username"
        to={`/home/user/${props.userId}`}
      >
        {props.username}
      </Link>
      <p className="following_element_descriptor">{props.bio}</p>
      <UnfollowUser userId={props.userId} />
    </div>
  );
};
