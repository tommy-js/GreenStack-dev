import React, { useEffect, useContext } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { sellStockMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  stockId: string;
  userId: string;
  shares: number;
  price: number;
  money: number;
  sellStockMutation: (variables: object) => void;
}

const AuctionStock: React.FC<Props> = (props) => {
  const { userVal } = useContext(userContext);

  useEffect(() => {
    let checkStocks = userVal.stocks.find(
      (el: any) => el.stockId === props.stockId
    );
    if (checkStocks) {
      let index = userVal.stocks[checkStocks];
      console.log(index);
    }
  }, []);

  function sell() {
    let value = props.money + props.price * props.shares;
    props.sellStockMutation({
      variables: {
        stockId: props.stockId,
        userId: props.userId,
        shares: props.shares,
        money: value,
      },
    });
  }

  return <button onClick={() => sell()}>Sell</button>;
};

export default compose(
  graphql(sellStockMutation, { name: "sellStockMutation" })
)(AuctionStock);
