import React, { useState, useEffect } from "react";

interface Props {
  visible: boolean;
}

const UserAlreadyExists: React.FC<Props> = (props) => {
  const [visibility, setVisibility] = useState("none");

  useEffect(() => {
    if (props.visible === false) {
      setVisibility("none");
    } else if (props.visible === true) {
      setVisibility("block");
    }
  }, [props.visible]);

  return <p style={{ display: visibility }}>That username is unavailable.</p>;
};

export default UserAlreadyExists;
