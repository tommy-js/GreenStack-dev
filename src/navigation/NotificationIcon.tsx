import React, { useEffect, useContext, useState } from "react";
import NotificationButton from "./NotificationButton";
import Notification from "./Notification";
import { userContext } from "../AppMain/App";

const NotificationIcon: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);
  const [notifyNew, setNotifyNew] = useState(false);
  const [opened, setOpened] = useState(false);
  const [triggerDisplay, setTriggerDisplay] = useState(0);
  const [notifs, setNotifs] = useState([] as any);

  // new code

  useEffect(() => {
    modNotificationColor(userVal.notifications);
  }, []);

  function modNotificationColor(arr: any) {
    if (arr.length === 0) {
      setNotifyNew(false);
    } else {
      for (let v = 0; v < arr.length; v++) {
        if (arr[v].viewed === false) {
          setNotifyNew(true);
          break;
        } else if (arr[v].viewed === true) {
          setNotifyNew(false);
        }
      }
    }
  }

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
