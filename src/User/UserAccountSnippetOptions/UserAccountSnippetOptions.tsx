import React, { useState } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { blockUserMutation } from "../../queries/queries.js";

interface Props {
  blocked: boolean;
  userId: string;
  updateBlocked: boolean;
  blockUserMutation: (variables: object) => void;
}

const UserAccSnippOpt: React.FC<Props> = (props) => {
  const [blocked, setBlocked] = useState(props.blocked);

  function changeChecked() {
    setBlocked(!blocked);
    props.blockUserMutation({
      variables: {
        id: props.userId,
        blocked: !blocked,
      },
    });
  }

  function controlBlocked() {
    if (blocked === false) {
      return <button onClick={() => changeChecked()}>block</button>;
    } else return <button onClick={() => changeChecked()}>unblock</button>;
  }

  return <React.Fragment>{controlBlocked()}</React.Fragment>;
};

export const UserAccountSnippetOptions = compose(
  graphql(blockUserMutation, { name: "blockUserMutation" })
)(UserAccSnippOpt);
