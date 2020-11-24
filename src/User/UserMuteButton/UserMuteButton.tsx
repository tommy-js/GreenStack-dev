import React, { useState, useEffect } from "react";

interface Props {
  mute: boolean;
  changeMuted: (mute: boolean) => void;
}

export const UserMuteButton: React.FC<Props> = (props) => {
  const [mute, setMute] = useState(props.mute);
  const [propText, setPropText] = useState();

  useEffect(() => {
    if (mute === true) setPropText("unmute");
    else setPropText("mute");
  }, [mute]);

  function modMute() {
    setMute(!mute);
    props.changeMuted(!mute);
  }

  return <button onClick={() => modMute()}>{propText}</button>;
};
