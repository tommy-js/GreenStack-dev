import React from "react";
import { Link } from "react-router-dom";

interface Props {
  user: string;
  userId: string;
}

export const UserAccountSnippetInfo: React.FC<Props> = (props) => {
  return <Link to={`/user/${props.userId}`}>{props.user}</Link>;
};
