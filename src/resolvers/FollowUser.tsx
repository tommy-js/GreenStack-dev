import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushFollowerToUserMutation } from "../queries/queries.js";

interface Props {
  userId: number;
  tradeData: any;
  pushFollowerToUserMutation: (variables: object) => any;
}

const FollowUser: React.FC<Props> = (props) => {
  function followUser() {
    let randVal = Math.floor(Math.random() * 1000000);
    let token = sessionStorage.getItem("Token");
    props
      .pushFollowerToUserMutation({
        variables: {
          token: token,
          followerId: props.tradeData.userId,
          id: randVal,
          followerName: props.tradeData.user,
          blocked: false,
        },
      })
      .then((res: any) => console.log("passed"))
      .catch((res: any) => console.log("err"));
  }

  return <button>Follow</button>;
};

export default compose(
  graphql(pushFollowerToUserMutation, { name: "pushFollowerToUserMutation" })
)(FollowUser);
