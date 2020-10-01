import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushFollowerToUserMutation } from "../queries/queries.js";

interface Props {
  userId: string;
  username: string;
  followerId: string;
  followerName: string;
  modAlreadyAdded: () => void;
  pushFollowerToUserMutation: (variables: object) => any;
}

const Follow: React.FC<Props> = (props) => {
  function follow() {
    console.log(
      props.followerId,
      props.followerName,
      props.userId,
      props.username
    );
    props
      .pushFollowerToUserMutation({
        variables: {
          followerId: props.userId,
          followerName: props.username,
          userId: props.followerId,
          username: props.followerName,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        props.modAlreadyAdded();
      });
  }

  return <button onClick={() => follow()}>Follow</button>;
};

export default compose(
  graphql(pushFollowerToUserMutation, { name: "pushFollowerToUserMutation" })
)(Follow);
