import React from "react";

export const LoadingUser: React.FC = () => {
  return (
    <div>
      <div id="spinning_dial_container">
        <div id="spinning_dial"></div>
      </div>
      <h2 id="loading_user">Loading...</h2>
    </div>
  );
};

export const LoadingGeneral: React.FC = () => {
  return (
    <div>
      <div id="spinning_dial_container">
        <div id="spinning_dial_general"></div>
      </div>
      <h2 id="loading_user_general">Loading...</h2>
    </div>
  );
};
