import React, { useContext } from "react";
import Header from "../Header";
import OwnedStocks from "./OwnedStocks";
import WatchStocks from "../WatchStocks";
import Profile from "../profile/Profile";
import NewTrade from "../NewTrade";
import LiquidCapital from "./LiquidCapital";
import { Route } from "react-router-dom";
import { userContext } from "../AppMain/App";

const Portfolio: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);
  const testData = userVal.trades;

  return (
    <div id="portfolio">
      <Route exact path="/portfolio">
        <Header text="Your Portfolio" />
        <LiquidCapital />
        <OwnedStocks testData={testData} />
        <Header text="Watch-list" />
        <WatchStocks />
        <Header text="Profile" />
      </Route>
      {testData.map((el: any) => (
        <Route path={`/portfolio/newtrade/${el.ticker}`}>
          <NewTrade
            title={el.title}
            ticker={el.ticker}
            stockId={el.stockId}
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
