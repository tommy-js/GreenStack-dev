import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div id="navbar">
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
      <NavLink className="nav_el" activeClassName="active_nav_el" to="/profile">
        Profile
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/leaderboard"
      >
        Leaderboard
      </NavLink>
      <NavLink className="nav_el" activeClassName="active_nav_el" to="/about">
        About
      </NavLink>
    </div>
  );
};

export default NavBar;
