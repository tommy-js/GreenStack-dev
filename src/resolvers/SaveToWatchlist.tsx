import React, { useState, useEffect, useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { pushStockToWatchlistMutation } from "../queries/queries.js";

interface Props {
  stockId: number;
  title: string;
  ticker: string;
  elementExists: boolean;
  pushStockToWatchlistMutation: (variables: object) => any;
  saveToWatchlist: () => void;
  modWatchlist: (isThere: boolean) => void;
  // Redux
  userId: string;
}

const SaveToWatchlist: React.FC<Props> = (props) => {
  function pushData() {
    props
      .pushStockToWatchlistMutation({
        variables: {
          userId: props.userId,
          stockId: props.stockId,
          title: props.title,
          ticker: props.ticker,
        },
      })
      .catch(() => console.log("err"))
      .then((res: any) => {
        console.log(res);
        props.modWatchlist(true);
      });
  }

  return <button onClick={() => pushData()}>Save to Watchlist</button>;
};

export default compose(
  graphql(pushStockToWatchlistMutation, {
    name: "pushStockToWatchlistMutation",
  })
)(SaveToWatchlist);
