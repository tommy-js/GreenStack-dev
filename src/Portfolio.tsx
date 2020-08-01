import React from "react";
import Header from "./Header";
import OwnedStocks from "./OwnedStocks";
import WatchStocks from "./WatchStocks";
import Profile from "./Profile";

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio">
      <Header text="Your Portfolio" />
      <OwnedStocks />
      <Header text="Watch-list" />
      <WatchStocks />
      <Header text="Profile" />
    </div>
  );
};

export default Portfolio;
