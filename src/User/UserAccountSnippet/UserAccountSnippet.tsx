import React, { useEffect, useState } from "react";
import { UserAccountSnippetInfo } from "../UserAccountSnippetInfo/UserAccountSnippetInfo";
import { UserAccountSnippetOptions } from "../UserAccountSnippetOptions/UserAccountSnippetOptions";

interface Props {
  user: string;
  userId: string;
  blocked: boolean;
  stateHide?: boolean;
  updateBlocked: boolean;
}

export const UserAccountSnippet: React.FC<Props> = (props) => {
  const [hideOrShow, setHideOrShow] = useState();

  useEffect(() => {
    if (props.stateHide === true && props.blocked === false) {
      setHideOrShow("none");
    } else setHideOrShow("block");
  }, [props.stateHide, props.blocked]);

  return (
    <div style={{ display: hideOrShow }}>
      <UserAccountSnippetInfo user={props.user} userId={props.userId} />
      <UserAccountSnippetOptions
        blocked={props.blocked}
        userId={props.userId}
        updateBlocked={props.updateBlocked}
      />
    </div>
  );
};
