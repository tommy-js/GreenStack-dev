import React from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  username: string;
  description: string;
}

export const ExploreUser: React.FC<User> = (props) => {
  return (
    <div className="explore_component">
      <Link to={`/home/user/${props.id}`} className="explore_component_link">
        <p>{props.username}</p>
        <p>{props.description}</p>
      </Link>
    </div>
  );
};
