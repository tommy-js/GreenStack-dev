import React from "react";
import { Link } from "react-router-dom";

interface Props {
  user: string;
  userId: number;
}

const UserAccountSnippetInfo: React.FC<Props> = (props) => {
  return (
    <Link to={`/user/${props.userId}`}>
      <div>
        <p>{props.user}</p>
      </div>
    </Link>
  );
};

export default UserAccountSnippetInfo;
