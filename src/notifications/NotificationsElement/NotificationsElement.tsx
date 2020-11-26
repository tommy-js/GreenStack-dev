import React, { useState } from "react";
import { NotifTime } from "../NotifTime/NotifTime";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserNotificationsViewedMutation } from "../../queries/queries";
import { NotificationItem } from "../../types/types";

interface Redux {
  notifications: NotificationItem[];
  onInitialNotificationsSet: (notifications: NotificationItem[]) => void;
  dropNotificationMutation: (variables: object) => any;
}

interface Props extends Redux {
  content: string;
  userId: number;
  id: string;
  viewed: boolean;
  timestamp: number;
  modNotifs: (id: string) => void;
  updateUserNotificationsViewedMutation: (variables: object) => any;
}

const NotifEl: React.FC<Props> = (props) => {
  const [viewed, setViewed] = useState(props.viewed);

  function checkViewed() {
    if (viewed === false) {
      props
        .updateUserNotificationsViewedMutation({
          variables: {
            id: props.id,
          },
        })
        .catch((err: any) => {
          console.log(err);
        })
        .then((res: any) => {
          console.log(res);
          props.modNotifs(props.id);
        });
      props.modNotifs(props.id);
      return (
        <div onClick={() => setViewed(true)}>
          <p>Not yet seen!</p>
        </div>
      );
    } else return null;
  }

  function successfulDrop(id: string) {
    let notifsArr = [...props.notifications];
    let foundInd = notifsArr.find((el: any) => el.id === id);
    if (foundInd) {
      let index = notifsArr.indexOf(foundInd);
      notifsArr.splice(index, 1);
      props.onInitialNotificationsSet(notifsArr);
    }
  }

  function dropNotification() {
    let token = sessionStorage.getItem("Token");
    props
      .dropNotificationMutation({
        variables: {
          token: token,
          id: props.id,
        },
      })
      .then(() => {
        successfulDrop(props.id);
      })
      .catch((err: any) => console.log(err));
  }

  return (
    <div className="notifications_link" key={props.id}>
      <Link to="/notifications">
        <p>{props.content}</p>
      </Link>
      <div id="notif">
        <p id="notif_content">{props.content}</p>
        <NotifTime timestamp={props.timestamp} />
        <button onClick={() => dropNotification()}>Dismiss</button>
      </div>
      {checkViewed()}
    </div>
  );
};

export const NotificationsElement = compose(
  graphql(updateUserNotificationsViewedMutation, {
    name: "updateUserNotificationsViewedMutation",
  })
)(NotifEl);
