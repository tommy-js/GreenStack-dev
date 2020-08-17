import React from "react";
import MenuItem from "./MenuItem";

const ExplorePageMenu: React.FC = () => {
  const menuItems = [
    { text: "Your Follows", path: "/follows" },
    { text: "Highest Yield", path: "/highest_yield" },
  ];
  return (
    <div>
      {menuItems.map((el) => (
        <MenuItem text={el.text} path={el.path} />
      ))}
    </div>
  );
};

export default ExplorePageMenu;
