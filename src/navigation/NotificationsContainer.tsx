import React, { useState, useEffect } from "react";
import NotificationsLink from "./NotificationsLink";
import NotificationsElement from "./NotificationsElement";
import HistoryElement from "./HistoryElement";
import SettingsElement from "./SettingsElement";
import VoidAlert from "./VoidAlert";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  history: any;
  userId: number;
  notifications: any;
}

interface LocalLink {
  changeTab: (tab: number) => void;
}

interface Data extends Redux {
  tab: number;
  settings: object[];
  changeTab: (tab: number) => void;
  modNotificationColor: (notifArr: object[]) => void;
}

export const NotificationsLinkContainer: React.FC<LocalLink> = (props) => {
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

const NotificationsDataContainer: React.FC<Data> = (props) => {
  const [notifications, setNotifications] = useState(props.notifications);
  // const [history, setHistory] = useState(props.history);
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

  function returnEmptyNotifications() {
    if (notifications.length < 1) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          <VoidAlert />
        </div>
      );
    } else {
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
    }
  }

  function returnEmptyHistory() {
    if (props.history.length < 1) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          <VoidAlert />
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          {props.history.map((el: any) => (
            <HistoryElement
              text={el.text}
              style={el.style}
              timestamp={el.timestamp}
            />
          ))}
        </div>
      );
    }
  }

  useEffect(() => {
    console.log(props.notifications);
  }, [notifications]);

  function checkTab() {
    if (props.tab === 1) {
      return <div>{returnEmptyNotifications()}</div>;
    } else if (props.tab === 2) {
      return <div>{returnEmptyHistory()}</div>;
    } else if (props.tab === 3) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          {settings.map((el: any) => (
            <SettingsElement title={el.title} />
          ))}
        </div>
      );
    }
  }

  return <div>{checkTab()}</div>;
};

export const NotifData = connect(mapStateToProps)(NotificationsDataContainer);
