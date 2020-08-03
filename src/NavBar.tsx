import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { statusContext } from "./App";

const NavBar: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);

  function statusChecker() {
    if (status === true) {
      return (
        <NavLink className="nav_el" activeClassName="active_nav_el" to="/login">
          Logout
        </NavLink>
      );
    } else {
      return (
        <NavLink className="nav_el" activeClassName="active_nav_el" to="/login">
          Login
        </NavLink>
      );
    }
  }

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
      {statusChecker()}
    </div>
  );
};

export default NavBar;
