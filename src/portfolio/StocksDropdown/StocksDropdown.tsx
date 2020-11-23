import React from "react";
import { IndividualWatchlistStockDropdownExp } from "../IndividualWatchlistStockDropdown/IndividualWatchlistStockDropdown";
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
    <div>
      {props.stocks.map((el: Stocks) => (
        <IndividualWatchlistStockDropdownExp
          stockId={el.stockId}
          title={el.title}
          ticker={el.ticker}
        />
      ))}
    </div>
  );
};

export const OwnedStocksDropdown: React.FC<Props> = (props) => {
  return (
    <div>
      {props.stocks.map((el: Stocks) => (
        <IndividualOwnedStockDropdown
          stockId={el.stockId}
          title={el.title}
          ticker={el.ticker}
        />
      ))}
    </div>
  );
};
