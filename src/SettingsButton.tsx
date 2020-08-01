import React from "react";

interface Props {
  text: string;
}

const SettingsButton: React.FC<Props> = (props) => {
  return <button id="settings_button">{props.text}</button>;
};

export default SettingsButton;
