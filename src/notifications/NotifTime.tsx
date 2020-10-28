import React from "react";
import { returnDate } from "./notificationsTimestamp";

interface Props {
  timestamp: number;
}

const NotifTime: React.FC<Props> = (props) => {
  return (
    <div id="submitted_notif_time">Submitted {returnDate(props.timestamp)}</div>
  );
};

export default NotifTime;
