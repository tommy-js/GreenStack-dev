import React from "react";

export const LoadingUser: React.FC = () => {
  return (
    <React.Fragment>
      <div id="spinning_dial_container">
        <div id="spinning_dial"></div>
      </div>
      <h2 id="loading_user">Loading...</h2>
    </React.Fragment>
  );
};

export const LoadingGeneral: React.FC = () => {
  return (
    <React.Fragment>
      <div id="spinning_dial_container">
        <div id="spinning_dial_general"></div>
      </div>
      <h2 id="loading_user_general">Loading...</h2>
    </React.Fragment>
  );
};
