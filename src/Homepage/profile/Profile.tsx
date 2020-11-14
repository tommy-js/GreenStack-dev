import React from "react";
import ProfileHeader from "./ProfileHeader";
import Settings from "./Settings";
import PersonalHistory from "./PersonalHistory";

interface Props {
  username: string;
}

const Profile: React.FC<Props> = (props) => {
  return (
    <div id="feed">
      <ProfileHeader />
      <Settings />
      <PersonalHistory />
    </div>
  );
};

export default Profile;
