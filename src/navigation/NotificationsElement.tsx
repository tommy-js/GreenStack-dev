import React from "react";
import DropNotification from "../resolvers/DropNotification";

interface Notifs {
  content: string;
  userId: number;
  id: number;
}

interface Hist {
  title: string;
  ticker: string;
  timestamp: number;
}

export const NotificationsElement: React.FC<Notifs> = (props) => {
  return (
    <div className="notifications_link">
      <p>{props.content}</p>
      <DropNotification id={props.id} userId={props.userId} />
    </div>
  );
};

export const HistoryElement: React.FC<Hist> = (props) => {
  return (
    <div className="notifications_link">
      <p>
        {props.title} #{props.ticker}
      </p>
      <p>{props.timestamp}</p>
    </div>
  );
};
