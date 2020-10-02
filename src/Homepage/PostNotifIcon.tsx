import React, { useState } from "react";

interface Props {
  success: boolean;
  timeoutFunc: () => void;
}

const PostNotifIcon: React.FC<Props> = (props) => {
  useState(() => {
    setTimeout(function () {
      props.timeoutFunc();
    }, 5000);
  });

  function returnNotifs() {
    if (props.success === true) {
      return (
        <div>
          <p>Successful post!</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>There was a problem with your post.</p>
        </div>
      );
    }
  }

  return <div>{returnNotifs()}</div>;
};

export default PostNotifIcon;
