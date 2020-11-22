import React from "react";
import { IndividualStockDropdown } from "../IndividualStockDropdown/IndividualStockDropdown";

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
        <IndividualStockDropdown title={el.title} />
      ))}
    </div>
  );
};
