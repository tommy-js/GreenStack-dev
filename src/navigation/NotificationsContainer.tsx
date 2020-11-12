import React, { useState, useEffect } from "react";
import NotificationsLink from "./NotificationsLink";
import NotificationsElement from "./NotificationsElement";
import HistoryElement from "./HistoryElement";
import DarkMode from "../resolvers/DarkMode";
import Private from "../resolvers/Private";
import AllowComments from "../resolvers/AllowComments";
import VoidAlert from "./VoidAlert";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../actions/actions";

interface Redux {
  history: any;
  userId: string;
  invisible: any;
  allowCommentsOnPosts: any;
  darkmode: any;
  notifications: any;
  onDarkmodeSet: (darkmode: any) => void;
  onInvisibleSet: (invisible: any) => void;
  onAllowCommentsSet: (allowCommentsOnPosts: any) => void;
}

interface Data extends Redux {
  tab: number;
  changeTab: (tab: number) => void;
  modNotificationColor: (notifArr: object[]) => void;
}

interface LocalLink {
  changeTab: (tab: number) => void;
}

const NotificationsLinkContainer: React.FC<LocalLink> = (props) => {
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

  function modDarkMode(darkmode: boolean) {
    props.onDarkmodeSet(darkmode);
  }

  function modPrivate(invisible: boolean) {
    props.onInvisibleSet(invisible);
  }

  function modAllowComments(allowCommentsOnPosts: boolean) {
    props.onAllowCommentsSet(allowCommentsOnPosts);
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
          <DarkMode modDarkMode={modDarkMode} darkmode={props.darkmode} />
          <Private modPrivate={modPrivate} invisible={props.invisible} />
          <AllowComments
            modAllowComments={modAllowComments}
            allowCommentsOnPosts={props.allowCommentsOnPosts}
          />
        </div>
      );
    }
  }

  return <div>{checkTab()}</div>;
};

export const NotifLink = connect(mapStateToProps)(NotificationsLinkContainer);
export const NotifData = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsDataContainer);
