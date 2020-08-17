import React, { useState, useContext } from "react";
import SettingsInputBox from "./SettingsInputBox";
import SettingsButton from "./SettingsButton";
import ChooseProfileImage from "./profile/ChooseProfileImage";
import { userContext } from "./AppMain/App";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { updateUserSettings } from "./queries/queries.js";

interface Props {
  updateUserSettings: (variables: object) => void;
}

const UserProfileSettings: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);

  function setInvis(checked: boolean) {
    props.updateUserSettings({
      variables: {
        userId: userVal.userId,
        darkmode: userVal.darkmode,
        invisible: checked,
        allowCommentsOnTrades: userVal.allowCommentsOnTrades,
      },
    });
  }

  function setComment(checked: boolean) {
    props.updateUserSettings({
      variables: {
        userId: userVal.userId,
        darkmode: userVal.darkmode,
        invisible: userVal.invisible,
        allowCommentsOnTrades: checked,
      },
    });
  }

  function setDarkmode(checked: boolean) {
    props.updateUserSettings({
      variables: {
        userId: userVal.userId,
        darkmode: checked,
        invisible: userVal.invisible,
        allowCommentsOnTrades: userVal.allowCommentsOnTrades,
      },
    });
  }

  return (
    <div>
      <SettingsInputBox
        text="Allow comments on trades"
        passInHide={setComment}
        isChecked={userVal.allowCommentsOnTrades}
      />
      <SettingsInputBox
        text="Set account to invisible"
        passInHide={setInvis}
        isChecked={userVal.invisible}
      />
      <SettingsInputBox
        text="Darkmode"
        passInHide={setDarkmode}
        isChecked={userVal.darkmode}
      />
      <SettingsButton text="Sign out" />
      <SettingsButton text="Delete account" />
      <ChooseProfileImage />
    </div>
  );
};

export default compose(
  graphql(updateUserSettings, { name: "updateUserSettings" })
)(UserProfileSettings);
