import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NotificationIcon from "../navigation/NotificationIcon";
import { statusContext } from "../AppMain/App";

const NavBar: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);

  return (
    <div className="navbar">
      <NavLink className="nav_el" activeClassName="active_nav_el" exact to="/">
        Home
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/profile/followed"
      >
        Profile
      </NavLink>
      <NavLink className="nav_el" activeClassName="active_nav_el" to="/about">
        About
      </NavLink>
      <NavLink className="nav_el" activeClassName="active_nav_el" to="/login">
        Logout
      </NavLink>
      <NotificationIcon />
    </div>
  );
};

export default NavBar;
