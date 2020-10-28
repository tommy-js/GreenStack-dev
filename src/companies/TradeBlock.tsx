import React, { useState, useEffect } from "react";
import { browserHist } from "../AppMain/history";
import SaveToWatchlist from "../resolvers/SaveToWatchlist";
import RemoveFromWatchlist from "../resolvers/RemoveFromWatchlist";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  title: string;
  ticker: string;
  watchlist: any;
  userId: string;
}

interface Props extends Redux {
  stockId: string;
}

const TradeBlock: React.FC<Props> = (props) => {
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

  function pushDomain(method: string) {
    browserHist.push(`/home/stock/${props.stockId}/${method}`);
  }

  return (
    <div>
      {showWatchlist()}
      <button onClick={() => pushDomain("buy")}>Buy</button>
      <button onClick={() => pushDomain("sell")}>Sell</button>
      <button onClick={() => pushDomain("options")}>Options</button>
    </div>
  );
};

export default connect(mapStateToProps)(TradeBlock);
