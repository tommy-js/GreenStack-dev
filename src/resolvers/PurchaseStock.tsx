import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { purchaseStockMutation } from "../queries/queries.js";

interface Props {
  stockId: string;
  userId: string;
  stockTitle: string;
  shares: number;
  money: number;
  price: number;
  purchaseStockMutation: (variables: object) => void;
  returnCannotAfford: () => void;
}

const PurchaseStock: React.FC<Props> = (props) => {
  function buy() {
    let remainder = props.money - props.shares * props.price;
    let token = sessionStorage.getItem("Token");
    if (remainder >= 0) {
      props.purchaseStockMutation({
        variables: {
          token: token,
          stockId: props.stockId,
          stockTitle: props.stockTitle,
          shares: props.shares,
          money: remainder,
        },
      });
    } else {
      props.returnCannotAfford();
    }
  }

  return <button onClick={() => buy()}>Buy</button>;
};

export default compose(
  graphql(purchaseStockMutation, { name: "purchaseStockMutation" })
)(PurchaseStock);
