import React from "react";
import portfolio_background from "../images/portfolio_background.png";

const InitialPortfolio: React.FC = () => {
  return (
    <div id="initial_portfolio">
      <h2 id="initial_portfolio_welcome_header">Welcome to your portfolio!</h2>
      <div id="portfolio_background_container">
        <img id="portfolio_background" src={portfolio_background} />
      </div>
      <h2 id="initial_portfolio_welcome_sub_header">
        Where You Keep Track of Things
      </h2>
      <div>
        <p>Add a stock to your portfolio to get started</p>
        <input />
      </div>
    </div>
  );
};

export default InitialPortfolio;
