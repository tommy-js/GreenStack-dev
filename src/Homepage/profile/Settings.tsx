import React from "react";
import DarkMode from "../../resolvers/DarkMode";
import Private from "../../resolvers/Private";
import DeleteAccount from "../../resolvers/DeleteAccount";
import AllowComments from "../../resolvers/AllowComments";

const Settings: React.FC = () => {
  return (
    <div>
      <h2>Settings</h2>
      <DarkMode />
      <Private />
      <AllowComments />
      <DeleteAccount />
    </div>
  );
};

export default Settings;
