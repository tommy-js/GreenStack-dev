import React from "react";
import { MenuItem } from "../MenuItem/MenuItem";

export const ExplorePageMenu: React.FC = () => {
  const menuItems = [
    { text: "Your Follows", path: "/follows" },
    { text: "Highest Yield", path: "/highest_yield" },
  ];
  return (
    <React.Fragment>
      {menuItems.map((el) => (
        <MenuItem text={el.text} path={el.path} />
      ))}
    </React.Fragment>
  );
};
