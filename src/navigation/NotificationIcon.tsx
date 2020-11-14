import React, { useEffect, useContext, useState } from "react";
import NotificationButton from "./NotificationButton";
import Notification from "./Notification";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  notifications: any;
}

interface Props extends Redux {
  triggerDisplay: string;
  modDisplay: () => void;
}

const NotificationIcon: React.FC<Props> = (props) => {
  const [notifyNew, setNotifyNew] = useState(false);
  const [opened, setOpened] = useState(false);

  // new code

  useEffect(() => {
    modNotificationColor(props.notifications);
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

  return (
    <div id="notification_icon">
      <NotificationButton
        notifyNew={notifyNew}
        triggerDropdown={props.modDisplay}
      />
      <div style={{ display: props.triggerDisplay }}>
        <Notification modNotificationColor={modNotificationColor} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(NotificationIcon);
