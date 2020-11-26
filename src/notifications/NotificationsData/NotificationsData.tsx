import React, { useState } from "react";
import { NotificationsElement } from "../NotificationsElement/NotificationsElement";
import { MutateUserSettings } from "../MutateUserSettings/MutateUserSettings";
import { VoidAlert } from "../VoidAlert/VoidAlert";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { NotificationItem } from "../../types/types";

interface Redux {
  userId: string;
  invisible: boolean;
  allowCommentsOnPosts: boolean;
  darkmode: boolean;
  notifications: NotificationItem[];
  onDarkmodeSet: (darkmode: boolean) => void;
  onInvisibleSet: (invisible: boolean) => void;
  onAllowCommentsSet: (allowCommentsOnPosts: boolean) => void;
}

interface Props extends Redux {
  tab: number;
  changeTab: (tab: number) => void;
  modNotificationColor: (notifArr: NotificationItem[]) => void;
}

const NotificationsDataContainer: React.FC<Props> = (props) => {
  const [notifications, setNotifications] = useState(props.notifications);

  function modNotifs(id: string) {
    let notifArr = props.notifications;
    let foundArr = notifArr.find((el: NotificationItem) => el.id === id);
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
        <React.Fragment>
          <button onClick={() => props.changeTab(0)}>back</button>
          <VoidAlert />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    }
  }

  function returnEmptyHistory() {
    // if (props.history.length < 1) {
    //   return (
    //     <div>
    //       <button onClick={() => props.changeTab(0)}>back</button>
    //       <VoidAlert />
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <button onClick={() => props.changeTab(0)}>back</button>
    //       {props.history.map((el: any) => (
    //         <HistoryElement
    //           text={el.text}
    //           style={el.style}
    //           timestamp={el.timestamp}
    //         />
    //       ))}
    //     </div>
    //   );
    // }
    return null;
  }

  function checkTab() {
    if (props.tab === 1) {
      return <React.Fragment>{returnEmptyNotifications()}</React.Fragment>;
    } else if (props.tab === 2) {
      return <React.Fragment>{returnEmptyHistory()}</React.Fragment>;
    } else if (props.tab === 3) {
      return (
        <React.Fragment>
          <button onClick={() => props.changeTab(0)}>back</button>
          <MutateUserSettings
            modDarkMode={modDarkMode}
            darkmode={props.darkmode}
            modPrivate={modPrivate}
            invisible={props.invisible}
            modAllowComments={modAllowComments}
            allowCommentsOnPosts={props.allowCommentsOnPosts}
          />
        </React.Fragment>
      );
    }
  }

  return <React.Fragment>{checkTab()}</React.Fragment>;
};

export const NotifData = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsDataContainer);
