import React from "react";
import portfolio_background from "../../images/portfolio_background.png";

export const InitialPortfolioBackground: React.FC = () => {
  return (
    <div id="portfolio_background_container">
      <img id="portfolio_background" src={portfolio_background} />
    </div>
  );
};
