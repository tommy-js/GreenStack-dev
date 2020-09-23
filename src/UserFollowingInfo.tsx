import React, { useEffect, useState } from "react";
import UserAccountSnippetInfo from "./UserAccountSnippetInfo";
import UserFollowingOptions from "./UserFollowingOptions";

interface Props {
  user: string;
  userId: number;
  mute: boolean;
  following: boolean;
  unfollowFunct: (userId: number) => void;
}

const UserFollowingInfo: React.FC<Props> = (props) => {
  const [muteColor, setMuteColor] = useState("white");
  const [followedDisp, setFollowedDisp] = useState("block");

  function changeMuted(mute: boolean) {
    if (mute === true) {
      setMuteColor("yellow");
    } else {
      setMuteColor("white");
    }
  }

  function setUnfollowed(userId: number) {
    props.unfollowFunct(props.userId);
    setFollowedDisp("none");
  }

  return (
    <div style={{ backgroundColor: muteColor, display: followedDisp }}>
      <UserAccountSnippetInfo user={props.user} userId={props.userId} />
      <UserFollowingOptions
        changeMuted={changeMuted}
        setUnfollowed={setUnfollowed}
        mute={props.mute}
        following={props.following}
        userId={props.userId}
      />
    </div>
  );
};

export default UserFollowingInfo;
