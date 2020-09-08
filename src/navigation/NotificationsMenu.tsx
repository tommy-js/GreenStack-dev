import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../AppMain/App";
import {
  NotificationsLinkContainer,
  NotificationsDataContainer,
} from "./NotificationsContainer";

interface Props {
  modNotificationColor: (notifArr: object[]) => void;
}

const NotificationsMenu: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [tab, setTab] = useState(0);
  const [notifications, setNotifications] = useState(userVal.notifications);
  const [history, setHistory] = useState(userVal.trades);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    console.log(userVal);
    setNotifications(userVal.notifications);
    setHistory(userVal.trades);
  }, [userVal]);

  function changeTab(id: number) {
    setTab(id);
  }

  function tabDisplay() {
    if (tab === 0) {
      return (
        <div>
          <NotificationsLinkContainer changeTab={changeTab} />
        </div>
      );
    } else {
      return (
        <div>
          <NotificationsDataContainer
            tab={tab}
            userId={userVal.userId}
            notifications={notifications}
            history={history}
            settings={settings}
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
