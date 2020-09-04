import React, { useState } from "react";
import DropNotification from "./DropNotification";

interface Props {
  text: string;
  userId: number;
  id: number;
  returnNotifs: (id: number) => void;
}

const Notification: React.FC<Props> = (props) => {
  const [triggerDisplay, setTriggerDisplay] = useState("block");

  function returnNotifs(id: number) {
    setTriggerDisplay("none");
    props.returnNotifs(id);
  }

  return (
    <div
      className="notification"
      key={props.id}
      style={{ display: triggerDisplay }}
    >
      <p>{props.text}</p>
      <DropNotification
        userId={props.userId}
        id={props.id}
        returnNotifs={returnNotifs}
      />
    </div>
  );
};

export default Notification;
