import React, { useEffect, useState, useContext } from "react";
import {
  NotificationsLinkContainer,
  NotificationsDataContainer,
} from "./NotificationsContainer";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  userId: any;
  notifications: any;
  trades: any;
}

interface Props extends Redux {
  modNotificationColor: (notifArr: object[]) => void;
}

const NotificationsMenu: React.FC<Props> = (props) => {
  const [tab, setTab] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [history, setHistory] = useState([]);
  const [settings, setSettings] = useState([
    { title: "setting 1" },
    { title: "setting 2" },
    { title: "setting 3" },
  ]);

  useEffect(() => {
    setNotifications(props.notifications);
    setHistory(props.trades);
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
            userId={props.userId}
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

export default connect(mapStateToProps)(NotificationsMenu);
