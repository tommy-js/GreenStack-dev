import React, { useState, useEffect } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import {
  pushStockToWatchlistMutation,
  removeStockFromWatchlistMutation,
} from "../../queries/queries.js";
import { WatchListItem } from "../../types/types";

interface Redux {
  watchlist: WatchListItem[];
}

interface Props extends Redux {
  stockId: string;
  title: string;
  ticker: string;
  userId: string;
  pushStockToWatchlistMutation: (variables: object) => any;
  removeStockFromWatchlistMutation: (variables: object) => any;
}

const CompanyOptionsRender: React.FC<Props> = (props) => {
  const [elementExists, setElementExists] = useState(false);
  const watchlist = [...props.watchlist];

  // Checks to make sure we haven't already added to watchlist
  useEffect(() => {
    if (watchlist) {
      let foundWatchlistElement = watchlist.find(
        (el: WatchListItem) => el.stockId == props.stockId
      );
      if (foundWatchlistElement != undefined) setElementExists(true);
      else if (foundWatchlistElement === undefined) setElementExists(false);
    }
  }, [watchlist]);

  function modWatchlist(isThere: boolean) {
    setElementExists(isThere);
  }

  function saveToWatchlist() {
    props
      .pushStockToWatchlistMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
          stockId: props.stockId,
          title: props.title,
          ticker: props.ticker,
        },
      })
      .catch(() => console.log("err"))
      .then((res: any) => {
        console.log(res);
        modWatchlist(true);
      });
  }

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
        modWatchlist(false);
      });
  }

  function showWatchlist() {
    if (elementExists === true) {
      return (
        <button onClick={() => removeFromWatchlist()}>
          Remove from Watchlist
        </button>
      );
    } else {
      return (
        <button onClick={() => saveToWatchlist()}>Save to Watchlist</button>
      );
    }
  }

  return <div className="default_middle">{showWatchlist()}</div>;
};

const CompanyOptionsRedux = connect(mapStateToProps)(CompanyOptionsRender);

const CompanyOptionsSaveMutation = compose(
  graphql(pushStockToWatchlistMutation, {
    name: "pushStockToWatchlistMutation",
  })
)(CompanyOptionsRedux);

export const CompanyOptions = compose(
  graphql(removeStockFromWatchlistMutation, {
    name: "removeStockFromWatchlistMutation",
  })
)(CompanyOptionsSaveMutation);
