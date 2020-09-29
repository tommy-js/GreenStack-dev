import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

const SidebarElement: React.FC<Props> = (props) => {
  return (
    <NavLink
      exact
      activeClassName="active_sidebar_element"
      className="sidebar_element"
      to={props.path}
    >
      <p className="sidebar_element_text">{props.text}</p>
    </NavLink>
  );
};

export default SidebarElement;
