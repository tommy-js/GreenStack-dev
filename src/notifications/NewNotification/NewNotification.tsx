import React from "react";
import notif from "../../images/notification.png";

interface Props {
  notifyNew: boolean;
}

export const NewNotification: React.FC<Props> = (props) => {
  function renderNotif() {
    if (props.notifyNew === true) return <img id="notif_icon" src={notif} />;
    else return null;
  }

  return <div id="notification_icon_block">{renderNotif()}</div>;
};
