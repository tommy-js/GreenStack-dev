import React from "react";
import ProfileHeader from "./ProfileHeader";
import Settings from "./Settings";
import TradeHistory from "./TradeHistory";

interface Props {
  username: string;
}

const Profile: React.FC<Props> = (props) => {
  return (
    <div className="feed">
      <ProfileHeader />
      <Settings />
      <TradeHistory />
    </div>
  );
};

export default Profile;
