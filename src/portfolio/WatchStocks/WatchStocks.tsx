import React, { useState } from "react";
import { WatchlistElement } from "../WatchlistElement/WatchlistElement";
import { StockSearchBox } from "./../StockSearchBox/StockSearchBox";
import { WatchlistStocksDropdown } from "../StocksDropdown/StocksDropdown";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Keys {
  keyId: number;
  stockId: string;
  title: string;
  ticker: string;
}

interface Redux {
  watchlist: Keys[];
}

const WatchStocksRender: React.FC<Redux> = (props) => {
  const [results, setResults] = useState([] as any);

  return (
    <React.Fragment>
      {props.watchlist.map((el: Keys) => (
        <WatchlistElement
          stockId={el.stockId}
          key={el.keyId}
          title={el.title}
          ticker={el.ticker}
        />
      ))}
      <StockSearchBox modResults={(res) => setResults(res)} />
      <WatchlistStocksDropdown stocks={results} />
    </React.Fragment>
  );
};

export const WatchStocks = connect(mapStateToProps)(WatchStocksRender);
