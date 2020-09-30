import React from "react";
import { NavLink } from "react-router-dom";
import NotificationIcon from "../navigation/NotificationIcon";

const NavBar: React.FC = () => {
  function dropToken() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      sessionStorage.removeItem("Token");
    }
  }

  return (
    <div className="navbar">
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        exact
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink className="nav_el" activeClassName="active_nav_el" to="/about">
        About
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        onClick={() => dropToken()}
        to="/login"
      >
        Logout
      </NavLink>
      <NotificationIcon />
    </div>
  );
};

export default NavBar;