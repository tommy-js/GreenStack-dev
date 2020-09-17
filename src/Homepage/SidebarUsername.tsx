import React, { useContext } from "react";
import { userContext } from "../AppMain/App";
import { Link } from "react-router-dom";

const SidebarUsername: React.FC = () => {
  const { userVal } = useContext(userContext);

  return (
    <Link id="sidebar_username_link_spec" to="/profile">
      <div id="sidebar_username_link">{userVal.username}</div>
    </Link>
  );
};

export default SidebarUsername;
