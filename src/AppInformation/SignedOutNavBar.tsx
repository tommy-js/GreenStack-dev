import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutNavBar: React.FC = () => {
  return (
    <div className="navbar">
      <NavLink className="nav_el" activeClassName="active_nav_el" to="/">
        TIKR
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="information"
      >
        About
      </NavLink>
    </div>
  );
};

export default SignedOutNavBar;
