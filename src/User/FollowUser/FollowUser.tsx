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
    let token = sessionStorage.getItem("Token");
    props
      .pushFollowerToUserMutation({
        variables: {
          token: token,
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
