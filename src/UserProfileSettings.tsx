import React from "react";
import SettingsInputBox from "./SettingsInputBox";
import SettingsButton from "./SettingsButton";

const UserProfileSettings: React.FC = () => {
  return (
    <div>
      <SettingsInputBox text="Allow comments on trades" isChecked={true} />
      <SettingsInputBox text="Set account to invisible" isChecked={false} />
      <SettingsButton text="Sign out" />
      <SettingsButton text="Delete account" />
    </div>
  );
};

export default UserProfileSettings;
