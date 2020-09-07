import React, { useState, useEffect } from "react";
import Notification from "./Notification";

interface Notifs {
  id: number;
  content: string;
}

interface Props {
  userId: number;
  notifications: Array<Notifs>;
}

const NotificationDropdown: React.FC<Props> = (props) => {
  const [notif, setNotif] = useState(props.notifications);

  console.log(notif);

  function returnNotifs(id: number) {
    let testArr = notif;
    let foundArr = testArr.find((el: any) => el.id === id);
    console.log(foundArr);
    if (foundArr) {
      let indexArr = testArr.indexOf(foundArr);
      console.log(indexArr);
      testArr.splice(indexArr, 1);
      console.log(testArr);
      setNotif(testArr);
    }
  }

  return (
    <div>
      {notif.map((el: Notifs) => (
        <Notification />
      ))}
    </div>
  );
};

export default NotificationDropdown;
