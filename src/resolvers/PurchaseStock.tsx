import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { purchaseStockMutation } from "../queries/queries.js";

interface Props {
  stockId: string;
  userId: string;
  shares: number;
  purchaseStockMutation: (variables: object) => void;
}

const PurchaseStock: React.FC<Props> = (props) => {
  function buy() {
    props.purchaseStockMutation({
      variables: {
        userId: props.userId,
        stockId: props.stockId,
        shares: props.shares,
      },
    });
  }

  return <button onClick={() => buy()}>Buy</button>;
};

export default compose(
  graphql(purchaseStockMutation, { name: "purchaseStockMutation" })
)(PurchaseStock);
