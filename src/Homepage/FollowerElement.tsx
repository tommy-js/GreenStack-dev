import React from "react";
import BlockUser from "../resolvers/BlockUser";
import { Link } from "react-router-dom";

interface Props {
  userId: number;
  username: string;
}

const FollowerElement: React.FC<Props> = (props) => {
  return (
    <div className="homepage_block_component">
      <Link className="block_link" to={`/home/user/${props.userId}`}>
        <p className="element_username">{props.username}</p>
      </Link>
      <p className="follower_element_descriptor">props.descriptor</p>
      <BlockUser followerId={props.userId} />
    </div>
  );
};

export default FollowerElement;
