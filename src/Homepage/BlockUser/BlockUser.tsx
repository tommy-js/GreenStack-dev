import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { blockUserMutation } from "../../queries/queries.js";

interface Props {
  followerId: string;
  blockUserMutation: (variables: object) => any;
}

const BlockUserMutation: React.FC<Props> = (props) => {
  function blockUser() {
    props
      .blockUserMutation({
        variables: {
          id: props.followerId,
          blocked: true,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => console.log(res));
  }

  return <button onClick={() => blockUser()}>Block</button>;
};

export const BlockUser = compose(
  graphql(blockUserMutation, { name: "blockUserMutation" })
)(BlockUserMutation);
