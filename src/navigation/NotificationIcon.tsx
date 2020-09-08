import React, { useEffect, useContext, useState } from "react";
import NotificationButton from "./NotificationButton";
import Notification from "./Notification";
import { userContext } from "../AppMain/App";

const NotificationIcon: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);
  const [notifyNew, setNotifyNew] = useState(false);
  const [opened, setOpened] = useState(false);
  const [triggerDisplay, setTriggerDisplay] = useState(0);
  const [notifs, setNotifs] = useState(userVal.notifications);

  function modNotificationColor(notifArr: object[]) {
    setNotifs(notifArr);
    console.log("notif arr:");
    console.log(notifArr);
    modNotifs();
  }

  function modNotifs() {
    for (let v = 0; v < notifs.length; v++) {
      if (notifs[v].viewed === false) {
        setNotifyNew(true);
        break;
      } else if (notifs[v].viewed === true) {
        setNotifyNew(false);
      }
    }
  }

  useEffect(() => {
    modNotifs();
  }, []);

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
      <NotificationButton notifyNew={notifyNew} triggerDropdown={modOpened} />
      <div style={{ opacity: triggerDisplay }}>
        <Notification modNotificationColor={modNotificationColor} />
      </div>
    </div>
  );
};

export default NotificationIcon;
