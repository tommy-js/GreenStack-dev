import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { removeStockFromWatchlistMutation } from "../queries/queries";

interface Props {
  stockId: number;
  userId: number;
  removeStockFromWatchlistMutation: (variables: object) => void;
}

const RemoveFromWatchlist: React.FC<Props> = (props) => {
  function removeFromWatchlist() {
    props.removeStockFromWatchlistMutation({
      variables: {
        stockId: props.stockId,
        userId: props.userId,
      },
    });
  }

  return (
    <button onClick={() => removeFromWatchlist()}>Remove from Watchlist</button>
  );
};

export default compose(
  graphql(removeStockFromWatchlistMutation, {
    name: "removeStockFromWatchlistMutation",
  })
)(RemoveFromWatchlist);
