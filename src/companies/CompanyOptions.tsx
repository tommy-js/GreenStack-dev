import React, { useState, useEffect, useContext } from "react";
import SaveToWatchlist from "../resolvers/SaveToWatchlist";
import RemoveFromWatchlist from "../resolvers/RemoveFromWatchlist";
import { userContext } from "../AppMain/App";

interface Props {
  stockId: string;
  title: string;
  ticker: string;
  price: number;
}

const CompanyOptions: React.FC<Props> = (props) => {
  const [elementExists, setElementExists] = useState(false);
  const { userVal, setUserVal } = useContext(userContext);
  const [watchlist, setWatchlist] = useState();

  function returnElementExists() {
    setElementExists(true);
  }

  // Crash prevention due to unloaded userVal state
  useEffect(() => {
    if (userVal.watchlist) {
      setWatchlist(userVal.watchlist);
    }
  }, [userVal]);

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

  function showWatchlist() {
    if (elementExists === true) {
      return (
        <RemoveFromWatchlist userId={userVal.userId} stockId={props.stockId} />
      );
    } else {
      return (
        <SaveToWatchlist
          title={props.title}
          ticker={props.ticker}
          stockId={props.stockId}
          returnElementExists={returnElementExists}
        />
      );
    }
  }

  return (
    <div className="default_middle">
      <p>price: {props.price}</p>
      {showWatchlist()}
    </div>
  );
};

export default CompanyOptions;
