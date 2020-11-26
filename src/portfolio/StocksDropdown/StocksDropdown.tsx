import React from "react";
import { IndividualWatchlistStockDropdown } from "../IndividualWatchlistStockDropdown/IndividualWatchlistStockDropdown";
import { IndividualOwnedStockDropdown } from "../IndividualOwnedStockDropdown/IndividualOwnedStockDropdown";

type Stocks = {
  country: string;
  description: string;
  marketcap: string;
  sector: string;
  shares: number;
  stockId: string;
  ticker: string;
  title: string;
};

interface Props {
  stocks: Stocks[];
}

export const WatchlistStocksDropdown: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      {props.stocks.map((el: Stocks) => (
        <IndividualWatchlistStockDropdown
          stockId={el.stockId}
          title={el.title}
          ticker={el.ticker}
        />
      ))}
    </React.Fragment>
  );
};

export const OwnedStocksDropdown: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      {props.stocks.map((el: Stocks) => (
        <IndividualOwnedStockDropdown
          stockId={el.stockId}
          title={el.title}
          ticker={el.ticker}
        />
      ))}
    </React.Fragment>
  );
};
