import React from "react";
import Assets from "./Assets";
import WatchStocks from "./WatchStocks";
import PortfolioData from "./PortfolioData";
import Header from "../User/Header";
import OwnedStocks from "./OwnedStocks";

interface Props {
  stocks: any;
  watchlist: any;
}

const DefaultPortfolio: React.FC<Props> = (props) => {
  return (
    <div>
      <Header text="Your Portfolio" />
      <Assets />
      <OwnedStocks owned={props.stocks} />
      <Header text="Watch-list" />
      <WatchStocks />
      <PortfolioData />
    </div>
  );
};

export default DefaultPortfolio;
