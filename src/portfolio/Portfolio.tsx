import React, { useState, useEffect, useContext } from "react";
import Header from "../Header";
import OwnedStocks from "./OwnedStocks";
import NewTrade from "../NewTrade";
import NavBar from "../misc/NavBar";
import LiquidCapital from "./LiquidCapital";
import WatchStocks from "./WatchStocks";
import { Route } from "react-router-dom";
import { userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

import { statusContext } from "../AppMain/App";

const Portfolio: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [userTrades, setUserTrades] = useState([
    {
      title: "Apple",
      ticker: "AAPL",
      stockId: 0,
      purchasePrice: 342,
      currentPrice: 532,
      shares: 4,
      keyId: 24235,
    },
  ]);

  const [userWatch, setUserWatch] = useState([
    {
      stockId: 0,
      title: "Apple",
      ticker: "AAPL",
      price: 532,
      keyId: 24235,
    },
  ]);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    } else {
      // setUserTrades(userVal.trades);
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div id="portfolio">
        <Route exact path="/portfolio">
          <Header text="Your Portfolio" />
          <LiquidCapital />
          <OwnedStocks testData={userTrades} />
          <Header text="Watch-list" />
          <WatchStocks stocks={userWatch} />
          <Header text="Profile" />
        </Route>
        {userTrades.map((el: any) => (
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
    </div>
  );
};

export default Portfolio;
