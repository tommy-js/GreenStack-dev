import React, { useState, useEffect } from "react";
import { NotifLink, NotifData } from "./NotificationsContainer";

interface Props {
  modNotificationColor: (notifArr: object[]) => void;
  zeroTabOut: boolean;
}

const NotificationsMenu: React.FC<Props> = (props) => {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setTab(0);
  }, [props.zeroTabOut]);

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
