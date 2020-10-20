import React, { useEffect, useContext } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { sellStockMutation } from "../queries/queries.js";

interface Props {
  stockId: string;
  userId: string;
  shares: number;
  price: number;
  money: number;
  sellStockMutation: (variables: object) => void;
  // Redux
  stocks: any;
}

const AuctionStock: React.FC<Props> = (props) => {
  useEffect(() => {
    let checkStocks = props.stocks.find(
      (el: any) => el.stockId === props.stockId
    );
    if (checkStocks) {
      let index = props.stocks[checkStocks];
      console.log(index);
    }
  }, []);

  function sell() {
    let value = props.money + props.price * props.shares;
    let token = sessionStorage.getItem("Token");
    props.sellStockMutation({
      variables: {
        stockId: props.stockId,
        token: token,
        shares: -props.shares,
        money: value,
      },
    });
  }

  return <button onClick={() => sell()}>Sell</button>;
};

export default compose(
  graphql(sellStockMutation, { name: "sellStockMutation" })
)(AuctionStock);
