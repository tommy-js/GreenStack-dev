import React from "react";

interface Props {
  triggerDropdown: () => void;
}

const NotificationButton: React.FC<Props> = (props) => {
  return <div id="trigger_icon" onClick={() => props.triggerDropdown()}></div>;
};

export default NotificationButton;
