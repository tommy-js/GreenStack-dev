import React from "react";
import Settings from "./Settings";
import TradeHistory from "./TradeHistory";
import LikeHistory from "./LikeHistory";

interface Props {
  username: string;
}

const Profile: React.FC<Props> = (props) => {
  return (
    <div className="feed">
      <p>{props.username}</p>
      <Settings />
      <TradeHistory />
    </div>
  );
};

export default Profile;
