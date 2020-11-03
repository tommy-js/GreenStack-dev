import React from "react";
import { Link } from "react-router-dom";

interface Props {
  username: string;
  userId: string;
  bio: string;
}

const QueryResult: React.FC<Props> = (props) => {
  return (
    <Link to={`/home/user/${props.userId}`}>
      <div>
        <h2>{props.username}</h2>
        <h3>{props.bio}</h3>
      </div>
    </Link>
  );
};

export default QueryResult;
