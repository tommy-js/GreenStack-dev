import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { saveReferenceTradeToUserMutation } from "../queries/queries.js";

interface Props {
  tradeData: any;
  saveReferenceTradeToUserMutation: (variables: object) => void;
}

const SaveTrade: React.FC<Props> = (props) => {
  function saveTrade() {
    props.saveReferenceTradeToUserMutation({
      variables: {
        userId: props.tradeData.userId,
        tradeId: props.tradeData.tradeId,
        price: props.tradeData.price,
        timestamp: props.tradeData.timestamp,
        title: props.tradeData.title,
        ticker: props.tradeData.ticker,
        shares: props.tradeData.shares,
        gain: props.tradeData.gain,
      },
    });
  }

  return <button>Save</button>;
};

export default compose(
  graphql(saveReferenceTradeToUserMutation, {
    name: "saveReferenceTradeToUserMutation",
  })
)(SaveTrade);
