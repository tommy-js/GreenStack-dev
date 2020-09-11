import React, { useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { pushSharesToUserMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  pushSharesToUserMutation: (variables: object) => any;
  shareId: number;
  shares: number;
  stockId: number;
}

const PushSharesToUser: React.FC<Props> = (props) => {
  function pushData() {
    props
      .pushSharesToUserMutation({
        variables: {
          shareId: props.shareId,
          shares: props.shares,
          stockId: props.stockId,
        },
      })
      .then((res: any) => console.log("passed"))
      .catch((res: any) => console.log("err"));
  }
  return null;
};

export default compose(
  graphql(pushSharesToUserMutation, { name: "pushSharesToUserMutation" })
)(PushSharesToUser);
