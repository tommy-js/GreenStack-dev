import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

export const MenuItem: React.FC<Props> = (props) => {
  return <Link to={props.path}>{props.text}</Link>;
};
