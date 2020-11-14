import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import NewNotification from "./NewNotification";

interface Props {
  notifyNew: boolean;
  triggerDropdown: () => void;
}

const NotificationButton: React.FC<Props> = (props) => {
  const [bcc, setBcc] = useState("orange");

  return (
    <div id="trigger_icon" onClick={() => props.triggerDropdown()}>
      <ProfileImage />
      <NewNotification notifyNew={props.notifyNew} />
    </div>
  );
};

export default NotificationButton;
