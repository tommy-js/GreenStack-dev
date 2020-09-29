import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { sellStockMutation } from "../queries/queries.js";

interface Props {
  stockId: string;
  userId: string;
  shares: number;
  sellStockMutation: (variables: object) => void;
}

const AuctionStock: React.FC<Props> = (props) => {
  function sell() {
    props.sellStockMutation({
      variables: {
        stockId: props.stockId,
        userId: props.userId,
        shares: props.shares,
      },
    });
  }

  return <button onClick={() => sell()}>Sell</button>;
};

export default compose(
  graphql(sellStockMutation, { name: "sellStockMutation" })
)(AuctionStock);
