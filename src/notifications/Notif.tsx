import React from "react";
import NotifTime from "./NotifTime";
import DropNotification from "../resolvers/DropNotification";

interface Props {
  content: string;
  timestamp: number;
  id: string;
}

const Notif: React.FC<Props> = (props) => {
  return (
    <div id="notif">
      <p id="notif_content">{props.content}</p>
      <NotifTime timestamp={props.timestamp} />
      <DropNotification id={props.id} />
    </div>
  );
};

export default Notif;
