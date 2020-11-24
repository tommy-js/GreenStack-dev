import React, { useState } from "react";
import { UserAccountSnippetInfo } from "../UserAccountSnippetInfo/UserAccountSnippetInfo";
import { UserFollowingOptions } from "../UserFollowingOptions/UserFollowingOptions";

interface Props {
  user: string;
  userId: string;
  mute: boolean;
  following: boolean;
  unfollowFunct: (userId: string) => void;
}

export const UserFollowingInfo: React.FC<Props> = (props) => {
  const [muteColor, setMuteColor] = useState("white");
  const [followedDisp, setFollowedDisp] = useState("block");

  function changeMuted(mute: boolean) {
    if (mute === true) setMuteColor("yellow");
    else setMuteColor("white");
  }

  function setUnfollowed() {
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
