import React from "react";
import BlockUser from "../resolvers/BlockUser";
import { Link } from "react-router-dom";

interface Props {
  userId: number;
  username: string;
  descriptor: string;
}

const FollowerElement: React.FC<Props> = (props) => {
  return (
    <div className="homepage_block_component">
      <Link to={`/home/user/${props.userId}`}>
        <p className="follower_element_username">{props.username}</p>
        <p className="follower_element_descriptor">{props.descriptor}</p>
      </Link>
      <BlockUser followerId={props.userId} />
    </div>
  );
};

export default FollowerElement;
