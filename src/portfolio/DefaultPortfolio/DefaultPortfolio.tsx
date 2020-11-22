import React from "react";
import Assets from "../Assets";
import { WatchStocksExp } from "../WatchStocks/WatchStocks";
import PortfolioData from "../PortfolioData";
import { MainPortfolioHeader } from "../MainPortfolioHeader/MainPortfolioHeader";
import { PortfolioHeader } from "../PortfolioHeader/PortfolioHeader";
import OwnedStocks from "../OwnedStocks/OwnedStocks";

const DefaultPortfolio: React.FC = () => {
  return (
    <div>
      <MainPortfolioHeader text="Your Portfolio" />
      <Assets />
      <PortfolioHeader text="Your Stocks" />
      <OwnedStocks />
      <PortfolioHeader text="Watchlist" />
      <WatchStocksExp />
      <PortfolioData />
    </div>
  );
};

export default DefaultPortfolio;
