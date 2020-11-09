import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { unfollowUserMutation } from "../queries/queries.js";

interface Props {
  followerId: number;
  unfollowUserMutation: (variables: object) => void;
}

const InlineUnfollow: React.FC<Props> = (props) => {
  function unfollow() {
    let token = sessionStorage.getItem("Token");
    props.unfollowUserMutation({
      variables: {
        token: token,
        followerId: props.followerId,
      },
    });
  }

  return <button onClick={() => unfollow()}>unfollow</button>;
};

export default compose(
  graphql(unfollowUserMutation, { name: "unfollowUserMutation" })
)(InlineUnfollow);
