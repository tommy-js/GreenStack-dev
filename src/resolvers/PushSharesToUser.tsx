import React, { useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { pushSharesToUserMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  pushSharesToUserMutation: (variables: object) => void;
  shareId: number;
  shares: number;
  stockId: number;
}

const PushSharesToUser: React.FC<Props> = (props) => {
  function pushData() {
    props.pushSharesToUserMutation({
      variables: {
        shareId: props.shareId,
        shares: props.shares,
        stockId: props.stockId,
      },
    });
  }
  return null;
};

export default compose(
  graphql(pushSharesToUserMutation, { name: "pushSharesToUserMutation" })
)(PushSharesToUser);
