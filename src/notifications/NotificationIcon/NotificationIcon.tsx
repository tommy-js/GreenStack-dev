import React, { useEffect, useState } from "react";
import { NotificationButton } from "../NotificationButton/NotificationButton";
import { Notification } from "../Notification/Notification";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { NotificationItem } from "../../types/types";
import { returnNotifyNew } from "./index";

interface Redux {
  notifications: NotificationItem[];
}

interface Props extends Redux {
  zeroTabOut: boolean;
  triggerDisplay: string;
  modDisplay: () => void;
}

const NotifIcon: React.FC<Props> = (props) => {
  const [notifyNew, setNotifyNew] = useState(false);

  useEffect(() => {
    modNotificationColor(props.notifications);
  }, []);

  function modNotificationColor(notifications: NotificationItem[]) {
    let returnViewed = returnNotifyNew(notifications);
    setNotifyNew(returnViewed);
  }

  return (
    <div id="notification_icon">
      <NotificationButton
        notifyNew={notifyNew}
        triggerDropdown={props.modDisplay}
      />
      <div style={{ display: props.triggerDisplay }}>
        <Notification
          zeroTabOut={props.zeroTabOut}
          modNotificationColor={modNotificationColor}
        />
      </div>
    </div>
  );
};

export const NotificationIcon = connect(mapStateToProps)(NotifIcon);
