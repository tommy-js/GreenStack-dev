import React from "react";
import { NavLink } from "react-router-dom";
import NotificationIcon from "../navigation/NotificationIcon";
import home from "../images/main_icon.png";
import portfolio from "../images/portfolio_icon.png";
import tutorial from "../images/tutorial_icon.png";

const NavBar: React.FC = () => {
  function dropToken() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      sessionStorage.removeItem("Token");
    }
  }

  return (
    <div className="navbar">
      <NavLink exact to="/home">
        <img src={home} className="navbar_icon" />
      </NavLink>
      <NavLink to="/portfolio">
        <img src={portfolio} className="navbar_icon" />
      </NavLink>
      <NavLink to="/about">
        <img src={tutorial} className="navbar_icon" />
      </NavLink>
      <NavLink onClick={() => dropToken()} to="/login">
        Logout
      </NavLink>
      <NotificationIcon />
    </div>
  );
};

export default NavBar;
