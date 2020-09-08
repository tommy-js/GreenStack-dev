import React, { useEffect, useState } from "react";

interface Props {
  notifyNew: boolean;
  triggerDropdown: () => void;
}

const NotificationButton: React.FC<Props> = (props) => {
  const [bcc, setBcc] = useState("orange");

  useEffect(() => {
    console.log(props.notifyNew);
    if (props.notifyNew === true) {
      setBcc("red");
    } else {
      setBcc("orange");
    }
  });

  return (
    <div
      id="trigger_icon"
      style={{ backgroundColor: bcc }}
      onClick={() => props.triggerDropdown()}
    ></div>
  );
};

export default NotificationButton;
