import React from "react";
import WatchlistElement from "../WatchlistElement/WatchlistElement";
import StockSearchBox from "./../StockSearchBox/StockSearchBox";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

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
  function parsingSearchResults() {}
  return (
    <div>
      {props.watchlist.map((el: Keys) => (
        <WatchlistElement
          stockId={el.stockId}
          key={el.keyId}
          title={el.title}
          ticker={el.ticker}
        />
      ))}
      <StockSearchBox parsingSearchResults={parsingSearchResults} />
    </div>
  );
};

export const WatchStocksExp = connect(mapStateToProps)(WatchStocks);
