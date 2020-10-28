import React from "react";
import Notif from "./Notif";
import NavBar from "../navigation/NavBar";
import { mapStateToProps } from "../actions/actions";
import { connect } from "react-redux";

interface Redux {
  notifications: any;
}

const NotificationsPage: React.FC<Redux> = ({ notifications }) => {
  return (
    <div>
      <NavBar />
      <div id="notifications_page">
        <h2 id="notification_header">Your Notifications</h2>
        {notifications.map((el: any) => (
          <Notif content={el.content} timestamp={el.timestamp} id={el.id} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(NotificationsPage);
