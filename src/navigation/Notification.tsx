import React, { useState } from "react";
import NotificationsMenu from "./NotificationsMenu";

interface Props {
  modNotificationColor: (notifArr: object[]) => void;
}

const Notification: React.FC<Props> = (props) => {
  return (
    <div className="notification">
      <NotificationsMenu modNotificationColor={props.modNotificationColor} />
    </div>
  );
};

export default Notification;
