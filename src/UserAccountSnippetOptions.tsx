import React, { useEffect, useState } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { blockUserMutation } from "./queries/queries.js";

interface Props {
  blocked: boolean;
  userId: number;
  listingId: number;
  updateBlocked: boolean;
  // modBlock: (userId: number, blocked: boolean) => void;
  blockUserMutation: (variables: object) => void;
}

const UserAccountSnippetOptions: React.FC<Props> = (props) => {
  const [blocked, setBlocked] = useState(props.blocked);

  useEffect(() => {
    console.log(props.blocked);
  }, [props.updateBlocked]);

  function changeChecked() {
    setBlocked(!blocked);
    // props.modBlock(props.userId, blocked);
    props.blockUserMutation({
      variables: {
        id: props.listingId,
        blocked: !blocked,
      },
    });
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

export default compose(
  graphql(blockUserMutation, { name: "blockUserMutation" })
)(UserAccountSnippetOptions);
