import React from "react";
import SidebarComponent from "../SidebarComponent";
import { NavLink } from "react-router-dom";

const ProfileSidebar: React.FC = () => {
  return (
    <div id="profile_sidebar">
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/profile/account"
      >
        <SidebarComponent text="Account" />
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/profile/followed"
      >
        <SidebarComponent text="Followers" />
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/profile/following"
      >
        <SidebarComponent text="Following" />
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/profile/comments"
      >
        <SidebarComponent text="Comments" />
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/profile/trades"
      >
        <SidebarComponent text="Trades" />
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/profile/settings"
      >
        <SidebarComponent text="Settings" />
      </NavLink>
      <NavLink
        className="nav_el"
        activeClassName="active_nav_el"
        to="/profile/references"
      >
        <SidebarComponent text="Saved Trades" />
      </NavLink>
    </div>
  );
};

export default ProfileSidebar;
