import React from "react";
import { NotificationsMenu } from "../NotificationsMenu/NotificationsMenu";
import { NotificationItem } from "../../types/types";

interface Props {
  zeroTabOut: boolean;
  modNotificationColor: (notifArr: NotificationItem[]) => void;
}

export const Notification: React.FC<Props> = (props) => {
  return (
    <div className="notification">
      <NotificationsMenu
        zeroTabOut={props.zeroTabOut}
        modNotificationColor={props.modNotificationColor}
      />
    </div>
  );
};
