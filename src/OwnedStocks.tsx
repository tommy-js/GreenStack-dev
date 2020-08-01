import React from "react";
import ShareListing from "./ShareListing";

const OwnedStocks: React.FC = () => {
  const testData = [
    {
      title: "Apple",
      ticker: "AAPL",
      purchasePrice: 230.24,
      currentPrice: 243.43,
      shares: 14,
    },
    {
      title: "Tesla",
      ticker: "TSLA",
      purchasePrice: 324.51,
      currentPrice: 537.27,
      shares: 12,
    },
  ];

  return (
    <div id="owned_stocked">
      {testData.map((el) => (
        <div>
          <ShareListing
            title={el.title}
            ticker={el.ticker}
            purchasePrice={el.purchasePrice}
            currentPrice={el.currentPrice}
            shares={el.shares}
          />
        </div>
      ))}
    </div>
  );
};

export default OwnedStocks;
