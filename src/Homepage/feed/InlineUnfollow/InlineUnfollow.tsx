import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { unfollowUserMutation } from "../../../queries/queries.js";

interface Props {
  followerId: string;
  unfollowUserMutation: (variables: object) => void;
}

const InlineUnfollowRender: React.FC<Props> = (props) => {
  function unfollow() {
    props.unfollowUserMutation({
      variables: {
        token: sessionStorage.getItem("Token"),
        followerId: props.followerId,
      },
    });
  }

  return <button onClick={() => unfollow()}>unfollow</button>;
};

export const InlineUnfollow = compose(
  graphql(unfollowUserMutation, { name: "unfollowUserMutation" })
)(InlineUnfollowRender);
