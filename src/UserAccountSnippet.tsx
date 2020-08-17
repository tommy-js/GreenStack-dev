import React, { useEffect, useState } from "react";
import ProfileIcon from "./profile/ProfileIcon";
import UserAccountSnippetInfo from "./UserAccountSnippetInfo";
import UserAccountSnippetOptions from "./UserAccountSnippetOptions";

interface Props {
  user: string;
  userId: number;
  listingId: number;
  blocked: boolean;
  stateHide?: boolean;
  updateBlocked: boolean;
  // modBlock: (userId: number, blocked: boolean) => void;
}

const UserAccountSnippet: React.FC<Props> = (props) => {
  const [hideOrShow, setHideOrShow] = useState();

  useEffect(() => {
    console.log(props.stateHide);
  }, [props.stateHide]);

  useEffect(() => {
    if (props.stateHide === true && props.blocked === false) {
      setHideOrShow("none");
    } else {
      setHideOrShow("block");
    }
  }, [props.stateHide, props.blocked]);

  return (
    <div style={{ display: hideOrShow }}>
      <ProfileIcon />
      <UserAccountSnippetInfo user={props.user} userId={props.userId} />
      <UserAccountSnippetOptions
        blocked={props.blocked}
        userId={props.userId}
        // modBlock={props.modBlock}
        listingId={props.listingId}
        updateBlocked={props.updateBlocked}
      />
    </div>
  );
};

export default UserAccountSnippet;
