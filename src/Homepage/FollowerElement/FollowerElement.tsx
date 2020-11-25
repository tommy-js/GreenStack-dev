import React from "react";
import { BlockUser } from "../BlockUser/BlockUser";
import { Link } from "react-router-dom";

interface Props {
  userId: string;
  username: string;
}

export const FollowerElement: React.FC<Props> = (props) => {
  return (
    <div className="homepage_block_component">
      <Link
        className="block_link element_username"
        to={`/home/user/${props.userId}`}
      >
        {props.username}
      </Link>
      <p className="follower_element_descriptor">props.descriptor</p>
      <BlockUser followerId={props.userId} />
    </div>
  );
};
