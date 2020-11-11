import React from "react";
import { returnDate } from "../../notifications/notificationsTimestamp";

interface Props {
  style: string;
  text: string;
  timestamp: number;
}

const HistoryElement: React.FC<Props> = (props) => {
  return (
    <div className="profile_trade">
      <p>{props.text}</p>
      <p>{returnDate(props.timestamp)}</p>
    </div>
  );
};

export default HistoryElement;
