import React from "react";
import { Link } from "react-router-dom";

interface Props {
  username: string;
  userId: string;
}

const QueryResult: React.FC<Props> = (props) => {
  return (
    <Link to={`/home/user/${props.userId}`}>
      <div>
        <h2>{props.username}</h2>
      </div>
    </Link>
  );
};

export default QueryResult;
