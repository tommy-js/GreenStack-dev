import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../AppMain/App";
import {
  NotificationsLinkContainer,
  NotificationsDataContainer,
} from "./NotificationsContainer";

const NotificationsMenu: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);
  const [tab, setTab] = useState(0);
  const [containerData, setContainerData] = useState(userVal.trades);

  useEffect(() => {
    console.log(userVal.trades);
  }, []);

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
            data={containerData}
            changeTab={changeTab}
          />
        </div>
      );
    }
  }
  return <div id="notifications_menu">{tabDisplay()}</div>;
};

export default NotificationsMenu;
