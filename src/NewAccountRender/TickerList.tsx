import React, { useState } from "react";
import TickerContainer from "./TickerContainer";

const TickerList: React.FC = () => {
  const tickers = [
    {
      ticker: "AAPL",
    },
    {
      ticker: "MSFT",
    },
    {
      ticker: "SHOP",
    },
    {
      ticker: "AAP",
    },
    {
      ticker: "KHC",
    },
    {
      ticker: "LVS",
    },
    {
      ticker: "ALK",
    },
    {
      ticker: "ALL",
    },
    {
      ticker: "LYV",
    },
    {
      ticker: "ORCL",
    },
    {
      ticker: "AMZ",
    },
    {
      ticker: "PYPL",
    },
    {
      ticker: "VZ",
    },
    {
      ticker: "VIAC",
    },
    {
      ticker: "LUV",
    },
    {
      ticker: "QRVO",
    },
  ];

  return (
    <div>
      {tickers.map((el: any) => (
        <TickerContainer ticker={el.ticker} />
      ))}
    </div>
  );
};

export default TickerList;
