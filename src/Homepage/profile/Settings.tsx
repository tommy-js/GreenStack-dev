import React from "react";
import DarkMode from "./DarkMode";
import Private from "./Private";
import DeleteAccount from "./DeleteAccount";

const Settings: React.FC = () => {
  return (
    <div>
      <h2>Settings</h2>
      <DarkMode />
      <Private />
      <DeleteAccount />
    </div>
  );
};

export default Settings;
