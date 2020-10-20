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
    let token = sessionStorage.getItem("Token");
    props
      .removeStockFromWatchlistMutation({
        variables: {
          stockId: props.stockId,
          token: token,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        console.log(res);
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
