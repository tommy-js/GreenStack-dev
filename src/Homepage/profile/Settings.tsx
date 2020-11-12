import React from "react";
import DarkMode from "../../resolvers/DarkMode";
import Private from "../../resolvers/Private";
import DeleteAccount from "../../resolvers/DeleteAccount";
import AllowComments from "../../resolvers/AllowComments";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";

interface Redux {
  darkmode: any;
  invisible: any;
  allowCommentsOnPosts: any;
  onDarkmodeSet: (darkmode: any) => void;
  onInvisibleSet: (invisible: any) => void;
  onAllowCommentsSet: (allowCommentsOnPosts: any) => void;
}

const Settings: React.FC<Redux> = (props) => {
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
      <DarkMode modDarkMode={modDarkMode} darkmode={props.darkmode} />
      <Private modPrivate={modPrivate} invisible={props.invisible} />
      <AllowComments
        modAllowComments={modAllowComments}
        allowCommentsOnPosts={props.allowCommentsOnPosts}
      />
      <DeleteAccount />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
