import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

const SidebarElement: React.FC<Props> = (props) => {
  return (
    <Link className="sidebar_element" to={props.path}>
      <p className="sidebar_element_text">{props.text}</p>
    </Link>
  );
};

export default SidebarElement;
