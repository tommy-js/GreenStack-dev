import React, { useState } from "react";
import WatchlistElement from "../WatchlistElement/WatchlistElement";
import { StockSearchBox } from "./../StockSearchBox/StockSearchBox";
import { StocksDropdown } from "../StocksDropdown/StocksDropdown";
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
  const [results, setResults] = useState([] as any);

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
      <StockSearchBox modResults={(res) => setResults(res)} />
      <StocksDropdown stocks={results} />
    </div>
  );
};

export const WatchStocksExp = connect(mapStateToProps)(WatchStocks);
