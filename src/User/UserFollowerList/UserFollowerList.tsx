import React, { useContext, useEffect, useState } from "react";
import { statusContext } from "../../AppMain/App";
import { UserAccountSnippet } from "../UserAccountSnippet/UserAccountSnippet";
import { SettingsInputBox } from "../SettingsInputBox/SettingsInputBox";
import { browserHist } from "../../AppMain/history.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowerItem } from "../../types/types";

interface Redux {
  followers: FollowerItem[];
}

const UserFollowLi: React.FC<Redux> = (props) => {
  const [stateHide, setStateHide] = useState(false);
  const [updateBlocked] = useState(false);
  const { status } = useContext(statusContext);

  useEffect(() => {
    if (status === false) browserHist.push("/login");
  }, []);

  function passInHide() {
    setStateHide(!stateHide);
  }

  return (
    <div>
      <SettingsInputBox
        text="Show blocked"
        isChecked={false}
        passInHide={passInHide}
      />
      {props.followers.map((el: FollowerItem) => (
        <UserAccountSnippet
          key={el.followerId}
          user={el.followerName}
          userId={el.followerId}
          blocked={el.blocked}
          stateHide={stateHide}
          updateBlocked={updateBlocked}
        />
      ))}
    </div>
  );
};

export const UserFollowerList = connect(mapStateToProps)(UserFollowLi);
