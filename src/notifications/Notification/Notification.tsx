import React from "react";
import { NotificationsMenu } from "../NotificationsMenu/NotificationsMenu";

interface Props {
  zeroTabOut: boolean;
  modNotificationColor: (notifArr: object[]) => void;
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
