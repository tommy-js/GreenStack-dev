import React, { useEffect, useState } from "react";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import { NewNotification } from "../NewNotification/NewNotification";

interface Props {
  notifyNew: boolean;
  triggerDropdown: () => void;
}

export const NotificationButton: React.FC<Props> = (props) => {
  return (
    <div id="trigger_icon" onClick={() => props.triggerDropdown()}>
      <ProfileImage />
      <NewNotification notifyNew={props.notifyNew} />
    </div>
  );
};
