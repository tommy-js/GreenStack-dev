import React, { useState, useEffect, useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { pushStockToWatchlistMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  stockId: number;
  title: string;
  ticker: string;
  elementExists: boolean;
  pushStockToWatchlistMutation: (variables: object) => any;
  saveToWatchlist: () => void;
  returnElementExists: () => void;
}

const SaveToWatchlist: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);

  function pushData() {
    const parsedId = parseInt(userVal.userId);
    let time = Math.floor(Date.now() / 1000);
    props
      .pushStockToWatchlistMutation({
        variables: {
          userId: parsedId,
          stockId: props.stockId,
          title: props.title,
          ticker: props.ticker,
          timestamp: time,
        },
      })
      .then(() => console.log("passed"))
      .catch(() => console.log("err"));
    props.returnElementExists();
  }

  return <button onClick={() => pushData()}>Save to Watchlist</button>;
};

export default compose(
  graphql(pushStockToWatchlistMutation, {
    name: "pushStockToWatchlistMutation",
  })
)(SaveToWatchlist);
