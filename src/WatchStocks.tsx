import React from "react";
import WatchListing from "./WatchListing";

const WatchStocks: React.FC = () => {
  const testData = [
    { title: "Microsoft", ticker: "MSFT", currentPrice: 231.64 },
  ];

  return (
    <div>
      {testData.map((el) => (
        <div>
          <WatchListing
            title={el.title}
            ticker={el.ticker}
            price={el.currentPrice}
          />
        </div>
      ))}
    </div>
  );
};

export default WatchStocks;
