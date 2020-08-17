import React, { useContext } from "react";
import WatchListing from "./WatchListing";
import { userContext } from "./AppMain/App";

const WatchStocks: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);

  return (
    <div>
      {userVal.watchlist.map((el: any) => (
        <div>
          <WatchListing
            title={el.title}
            ticker={el.ticker}
            price={el.currentPrice}
          />
        </div>
      ))}
    </div>
  );
};

export default WatchStocks;
