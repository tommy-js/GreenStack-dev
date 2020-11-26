import React from "react";
import { DarkMode } from "../DarkMode/DarkMode";
import { Private } from "../Private/Private";
import DeleteAccount from "../../resolvers/DeleteAccount";
import AllowComments from "../../resolvers/AllowComments";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";

interface Redux {
  darkmode: boolean;
  invisible: boolean;
  allowCommentsOnPosts: boolean;
  onDarkmodeSet: (darkmode: boolean) => void;
  onInvisibleSet: (invisible: boolean) => void;
  onAllowCommentsSet: (allowCommentsOnPosts: boolean) => void;
}

const SettingsRender: React.FC<Redux> = (props) => {
  function modDarkMode(darkmode: boolean) {
    props.onDarkmodeSet(darkmode);
  }

  function modPrivate(invisible: boolean) {
    props.onInvisibleSet(invisible);
  }

  function modAllowComments(allowCommentsOnPosts: boolean) {
    props.onAllowCommentsSet(allowCommentsOnPosts);
  }

  return (
    <div>
      <h2>Settings</h2>
      <DarkMode />
      <Private modPrivate={modPrivate} invisible={props.invisible} />
      <AllowComments
        modAllowComments={modAllowComments}
        allowCommentsOnPosts={props.allowCommentsOnPosts}
      />
      <DeleteAccount />
    </div>
  );
};

export const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsRender);
