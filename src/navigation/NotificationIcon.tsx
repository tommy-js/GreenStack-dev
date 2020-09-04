import React, { useEffect, useContext, useState } from "react";
import NotificationButton from "./NotificationButton";
import NotificationDropdown from "./NotificationDropdown";
import { userContext } from "../AppMain/App";

const NotificationIcon: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { userVal, setUserVal } = useContext(userContext);
  const [triggerDisplay, setTriggerDisplay] = useState(0);

  function modOpened() {
    setOpened(!opened);
    if (opened === true) {
      setTriggerDisplay(0);
    } else {
      setTriggerDisplay(1);
    }
  }

  return (
    <div id="notification_icon">
      <NotificationButton triggerDropdown={modOpened} />
      <div style={{ opacity: triggerDisplay }}>
        <NotificationDropdown
          userId={userVal.userId}
          notifications={userVal.notifications}
        />
      </div>
    </div>
  );
};

export default NotificationIcon;
