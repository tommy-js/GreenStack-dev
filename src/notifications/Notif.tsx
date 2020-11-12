import React from "react";
import NotifTime from "./NotifTime";
import DropNotification from "../resolvers/DropNotification";
import { mapStateToProps, mapDispatchToProps } from "../actions/actions";
import { connect } from "react-redux";

interface Redux {
  notifications: any;
  onInitialNotificationsSet: (notifications: any) => void;
}

interface Props extends Redux {
  content: string;
  timestamp: number;
  id: string;
}

const Notif: React.FC<Props> = (props) => {
  function successfulDrop(id: string) {
    let notifsArr = [...props.notifications];
    let foundInd = notifsArr.find((el: any) => el.id === id);
    if (foundInd) {
      let index = notifsArr.indexOf(foundInd);
      notifsArr.splice(index, 1);
      props.onInitialNotificationsSet(notifsArr);
    }
  }

  return (
    <div id="notif">
      <p id="notif_content">{props.content}</p>
      <NotifTime timestamp={props.timestamp} />
      <DropNotification id={props.id} successfulDrop={successfulDrop} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Notif);
