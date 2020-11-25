import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { blockUserMutation } from "../queries/queries.js";

interface Props {
  followerId: number;
  blockUserMutation: (variables: object) => void;
}

const BlockUser: React.FC<Props> = (props) => {
  function blockUser() {
    props.blockUserMutation({
      variables: {
        id: props.followerId,
        blocked: true,
      },
    });
  }

  return <button onClick={() => blockUser()}>Block</button>;
};

export default compose(
  graphql(blockUserMutation, { name: "blockUserMutation" })
)(BlockUser);
