import React from "react";

const LoadingUser: React.FC = () => {
  return (
    <div>
      <div id="spinning_dial_container">
        <div id="spinning_dial"></div>
      </div>
      <h2 id="loading_user">Loading...</h2>
    </div>
  );
};

export default LoadingUser;
