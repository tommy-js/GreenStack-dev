import React from "react";
import WatchListing from "./WatchListing";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Keys {
  keyId: number;
  stockId: number;
  title: string;
  ticker: string;
}

interface Redux {
  watchlist: Keys[];
}

const WatchStocks: React.FC<Redux> = (props) => {
  return (
    <div>
      {props.watchlist.map((el: Keys) => (
        <WatchListing
          stockId={el.stockId}
          key={el.keyId}
          title={el.title}
          ticker={el.ticker}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(WatchStocks);
