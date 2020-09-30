import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushFollowerToUserMutation } from "../queries/queries.js";

interface Props {
  userId: string;
  username: string;
  followerId: string;
  followerName: string;
  pushFollowerToUserMutation: (variables: object) => void;
}

const Follow: React.FC<Props> = (props) => {
  function follow() {
    props.pushFollowerToUserMutation({
      variables: {
        followerId: props.userId,
        followerName: props.username,
        userId: props.followerId,
        username: props.followerName,
      },
    });
  }

  return <button onClick={() => follow()}>Follow</button>;
};

export default compose(
  graphql(pushFollowerToUserMutation, { name: "pushFollowerToUserMutation" })
)(Follow);
