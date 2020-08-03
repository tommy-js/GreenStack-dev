import React from "react";
import Header from "./Header";
import OwnedStocks from "./OwnedStocks";
import WatchStocks from "./WatchStocks";
import Profile from "./Profile";
import NewTrade from "./NewTrade";
import { Route } from "react-router-dom";

const Portfolio: React.FC = () => {
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
    <div id="portfolio">
      <Route exact path="/portfolio">
        <Header text="Your Portfolio" />
        <OwnedStocks testData={testData} />
        <Header text="Watch-list" />
        <WatchStocks />
        <Header text="Profile" />
      </Route>
      {testData.map((el) => (
        <Route path={`/portfolio/newtrade/${el.ticker}`}>
          <NewTrade
            title={el.title}
            ticker={el.ticker}
            purchasePrice={el.purchasePrice}
            currentPrice={el.currentPrice}
            shares={el.shares}
          />
        </Route>
      ))}
    </div>
  );
};

export default Portfolio;
