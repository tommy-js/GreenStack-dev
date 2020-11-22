import React from "react";
import { IndividualStockDropdownExp } from "../IndividualStockDropdown/IndividualStockDropdown";

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

export const StocksDropdown: React.FC<Props> = (props) => {
  return (
    <div>
      {props.stocks.map((el: Stocks) => (
        <IndividualStockDropdownExp
          stockId={el.stockId}
          title={el.title}
          ticker={el.ticker}
        />
      ))}
    </div>
  );
};
