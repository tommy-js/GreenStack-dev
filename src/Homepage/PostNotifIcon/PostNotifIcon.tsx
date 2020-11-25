import React, { useState } from "react";

interface Props {
  success: boolean;
  timeoutFunc: () => void;
}

export const PostNotifIcon: React.FC<Props> = (props) => {
  useState(() => {
    setTimeout(function () {
      props.timeoutFunc();
    }, 5000);
  });

  function returnNotifs() {
    if (props.success === true) return <p>Successful post!</p>;
    else return <p>There was a problem with your post.</p>;
  }

  return <React.Fragment>{returnNotifs()}</React.Fragment>;
};
