import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

const SidebarElement: React.FC<Props> = (props) => {
  return (
    <Link to={props.path}>
      <h2>{props.text}</h2>
    </Link>
  );
};

export default SidebarElement;
