import React, { useState } from "react";
import { NotifLink, NotifData } from "./NotificationsContainer";

interface Props {
  modNotificationColor: (notifArr: object[]) => void;
}

const NotificationsMenu: React.FC<Props> = (props) => {
  const [tab, setTab] = useState(0);

  function changeTab(id: number) {
    setTab(id);
  }

  function tabDisplay() {
    if (tab === 0) {
      return (
        <div>
          <NotifLink changeTab={changeTab} />
        </div>
      );
    } else {
      return (
        <div>
          <NotifData
            tab={tab}
            changeTab={changeTab}
            modNotificationColor={props.modNotificationColor}
          />
        </div>
      );
    }
  }
  return <div>{tabDisplay()}</div>;
};

export default NotificationsMenu;
