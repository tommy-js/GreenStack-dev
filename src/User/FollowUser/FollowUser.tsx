import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushFollowerToUserMutation } from "../../queries/queries.js";

interface Props {
  followId: string;
  followName: string;
  modAlreadyAdded: () => void;
  pushFollowerToUserMutation: (variables: object) => any;
}

const Follow: React.FC<Props> = (props) => {
  function follow() {
    props
      .pushFollowerToUserMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
          followId: props.followId,
          followName: props.followName,
        },
      })
      .catch((err: any) => console.log(err))
      .then(() => {
        props.modAlreadyAdded();
      });
  }

  return <button onClick={() => follow()}>Follow</button>;
};

export const FollowUser = compose(
  graphql(pushFollowerToUserMutation, { name: "pushFollowerToUserMutation" })
)(Follow);
