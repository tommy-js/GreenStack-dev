import React, { useState } from "react";
import DropNotification from "../resolvers/DropNotification";
import NotificationsMenu from "./NotificationsMenu";

const Notification: React.FC = () => {
  return (
    <div className="notification">
      <NotificationsMenu />
    </div>
  );
};

export default Notification;
