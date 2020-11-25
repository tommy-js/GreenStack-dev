import React from "react";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { Settings } from "../Settings/Settings";
import { PersonalHistory } from "../PersonalHistory/PersonalHistory";

export const Profile: React.FC = () => {
  return (
    <div id="feed">
      <ProfileHeader />
      <Settings />
      <PersonalHistory />
    </div>
  );
};
