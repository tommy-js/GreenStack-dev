import React from "react";
import history from "../../images/nothing_found.png";

export const VoidAlert: React.FC = () => {
  return (
    <React.Fragment>
      <h3 id="void_text">Nothing found!</h3>
      <div id="void_img">
        <img id="history_void_img" src={history} />
      </div>
    </React.Fragment>
  );
};
