import React, { useEffect, useState } from "react";

interface Props {
  text: string;
  isChecked: boolean;
  passInHide?: (checked: boolean) => void;
}

export const SettingsInputBox: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState(props.isChecked);

  useEffect(() => {
    if (props.passInHide) props.passInHide(checked);
  }, [checked]);

  return (
    <form id="settings_input_box">
      <input
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <label>{props.text}</label>
    </form>
  );
};
