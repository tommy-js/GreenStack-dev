import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { unfollowUserMutation } from "../../queries/queries.js";

interface Props {
  userId: string;
  unfollowUserMutation: (variables: object) => void;
}

const UnfollowUserMutation: React.FC<Props> = (props) => {
  function unfollow() {
    props.unfollowUserMutation({
      variables: {
        token: sessionStorage.getItem("Token"),
        followerId: props.userId,
      },
    });
  }

  return <button onClick={() => unfollow()}>unfollow</button>;
};

export const UnfollowUser = compose(
  graphql(unfollowUserMutation, { name: "unfollowUserMutation" })
)(UnfollowUserMutation);
