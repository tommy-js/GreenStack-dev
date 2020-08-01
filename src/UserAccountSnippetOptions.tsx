import React, { useEffect, useState } from "react";

interface Props {
  blocked: boolean;
  userId: number;
  updateBlocked: boolean;
  modBlock: (userId: number, blocked: boolean) => void;
}

const UserAccountSnippetOptions: React.FC<Props> = (props) => {
  const [blocked, setBlocked] = useState(props.blocked);

  useEffect(() => {
    console.log(props.blocked);
  }, [props.updateBlocked]);

  function changeChecked() {
    setBlocked(!blocked);
    props.modBlock(props.userId, blocked);
  }

  function controlBlocked() {
    if (blocked === false) {
      return <button onClick={() => changeChecked()}>block</button>;
    } else {
      return <button onClick={() => changeChecked()}>unblock</button>;
    }
  }

  return <div>{controlBlocked()}</div>;
};

export default UserAccountSnippetOptions;
