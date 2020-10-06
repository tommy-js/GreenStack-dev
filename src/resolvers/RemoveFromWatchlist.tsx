import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { removeStockFromWatchlistMutation } from "../queries/queries";

interface Props {
  stockId: number;
  userId: number;
  removeStockFromWatchlistMutation: (variables: object) => any;
  modWatchlist: (isThere: boolean) => void;
}

const RemoveFromWatchlist: React.FC<Props> = (props) => {
  function removeFromWatchlist() {
    props
      .removeStockFromWatchlistMutation({
        variables: {
          stockId: props.stockId,
          userId: props.userId,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        props.modWatchlist(false);
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
