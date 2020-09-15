import React from "react";

interface Props {
  title: string;
}

const SettingsElement: React.FC<Props> = (props) => {
  return (
    <div className="notifications_link">
      <h3>{props.title}</h3>
    </div>
  );
};

export default SettingsElement;
