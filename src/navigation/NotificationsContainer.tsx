import React, { useState, useEffect } from "react";
import NotificationsLink from "./NotificationsLink";
import NotificationsElement from "./NotificationsElement";
import HistoryElement from "./HistoryElement";

interface Link {
  changeTab: (tab: number) => void;
}

interface Data {
  tab: number;
  userId: number;
  notifications: {
    content: string;
    id: number;
    timestamp: number;
    viewed: boolean;
  }[];
  history: object[];
  settings: object[];
  changeTab: (tab: number) => void;
  modNotificationColor: (notifArr: object[]) => void;
}

export const NotificationsLinkContainer: React.FC<Link> = (props) => {
  return (
    <div>
      <NotificationsLink
        title="Notifications"
        tab={1}
        changeTab={props.changeTab}
      />
      <NotificationsLink title="History" tab={2} changeTab={props.changeTab} />
      <NotificationsLink title="Settings" tab={3} changeTab={props.changeTab} />
    </div>
  );
};

export const NotificationsDataContainer: React.FC<Data> = (props) => {
  const [notifications, setNotifications] = useState(props.notifications);
  const [history, setHistory] = useState(props.history);
  const [settings, setSettings] = useState(props.settings);

  function modNotifs(id: number) {
    let notifArr = props.notifications;
    let foundArr = notifArr.find((el: any) => el.id === id);
    if (foundArr) {
      let index = notifArr.indexOf(foundArr);
      notifArr[index].viewed = true;
      setNotifications(notifArr);
      props.modNotificationColor(notifArr);
    }
  }

  useEffect(() => {
    console.log(props.notifications);
  }, [notifications]);

  function checkTab() {
    if (props.tab === 1) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          {notifications.map((el: any) => (
            <NotificationsElement
              key={el.id}
              userId={props.userId}
              id={el.id}
              content={el.content}
              viewed={el.viewed}
              modNotifs={modNotifs}
            />
          ))}
        </div>
      );
    } else if (props.tab === 2) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          {history.map((el: any) => (
            <HistoryElement
              title={el.title}
              ticker={el.ticker}
              timestamp={el.timestamp}
            />
          ))}
        </div>
      );
    } else if (props.tab === 3) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          {settings.map((el: any) => (
            <div>
              <p>setting 1</p>
              <p>setting 2</p>
            </div>
          ))}
        </div>
      );
    }
  }

  return <div>{checkTab()}</div>;
};
