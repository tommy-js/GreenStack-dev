import React from "react";
import { Assets } from "../Assets/Assets";
import { WatchStocks } from "../WatchStocks/WatchStocks";
import { PortfolioData } from "../PortfolioData/PortfolioData";
import { MainPortfolioHeader } from "../MainPortfolioHeader/MainPortfolioHeader";
import { PortfolioHeader } from "../PortfolioHeader/PortfolioHeader";
import { OwnedStocks } from "../OwnedStocks/OwnedStocks";

export const DefaultPortfolio: React.FC = () => {
  return (
    <React.Fragment>
      <MainPortfolioHeader text="Your Portfolio" />
      <Assets />
      <PortfolioHeader text="Your Stocks" />
      <OwnedStocks />
      <PortfolioHeader text="Watchlist" />
      <WatchStocks />
      <PortfolioData />
    </React.Fragment>
  );
};
