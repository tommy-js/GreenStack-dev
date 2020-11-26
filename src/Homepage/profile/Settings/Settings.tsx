import React from "react";
import { DarkMode } from "../DarkMode/DarkMode";
import { Private } from "../Private/Private";
import { AllowComments } from "../AllowComments/AllowComments";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";

const SettingsRender: React.FC = () => {
  return (
    <React.Fragment>
      <h2>Settings</h2>
      <DarkMode />
      <Private />
      <AllowComments />
    </React.Fragment>
  );
};

export const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsRender);
