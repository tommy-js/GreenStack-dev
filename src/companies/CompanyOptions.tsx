import React, { useState, useEffect, useContext } from "react";
import SaveToWatchlist from "../resolvers/SaveToWatchlist";
import RemoveFromWatchlist from "../resolvers/RemoveFromWatchlist";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Props {
  stockId: string;
  title: string;
  ticker: string;
  watchlist: any;
  userId: string;
}

const CompanyOptions: React.FC<Props> = (props) => {
  const [elementExists, setElementExists] = useState(false);
  const [watchlist, setWatchlist] = useState(props.watchlist);

  // Checks to make sure we haven't already added to watchlist
  useEffect(() => {
    if (watchlist) {
      let foundWatchlistElement = watchlist.find(
        (el: any) => el.stockId == props.stockId
      );
      if (foundWatchlistElement != undefined) {
        setElementExists(true);
      } else if (foundWatchlistElement === undefined) {
        setElementExists(false);
      }
    }
  }, [watchlist]);

  function modWatchlist(isThere: boolean) {
    setElementExists(isThere);
  }

  function showWatchlist() {
    if (elementExists === true) {
      return (
        <RemoveFromWatchlist
          userId={props.userId}
          stockId={props.stockId}
          modWatchlist={modWatchlist}
        />
      );
    } else {
      return (
        <SaveToWatchlist
          title={props.title}
          ticker={props.ticker}
          stockId={props.stockId}
          modWatchlist={modWatchlist}
        />
      );
    }
  }

  return <div className="default_middle">{showWatchlist()}</div>;
};

export default connect(mapStateToProps)(CompanyOptions);
