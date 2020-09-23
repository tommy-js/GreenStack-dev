import React from "react";
import Trade from "./Trade";

const TradeHistory: React.FC = () => {
  const testData = [
    {
      tradeId: 0,
      name: "Apple",
      ticker: "AAPL",
      shares: 2,
      price: 424,
      gain: 849,
    },
    {
      tradeId: 1,
      name: "Microsoft",
      ticker: "MSFT",
      shares: 4,
      price: 200,
      gain: 800,
    },
  ];

  return (
    <div>
      <h2>Trade History</h2>
      {testData.map((el: any) => (
        <Trade tradeId={el.tradeId} name={el.name} ticker={el.ticker} />
      ))}
    </div>
  );
};

export default TradeHistory;
