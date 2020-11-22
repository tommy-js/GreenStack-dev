import React from "react";
import { InitialPortfolioWelcome } from "./InitialPortfolioWelcome/InitialPortfolioWelcome";
import { InitialPortfolioBackground } from "./InitialPortfolioBackground/InitialPortfolioBackground";
import { InitialPortfolioSubHeader } from "./InitialPortfolioSubHeader/InitialPortfolioSubHeader";
import { InitialPortfolioSubContainer } from "./InitialPortfolioSubContainer/InitialPortfolioSubContainer";
import StockSearchBox from "./StockSearchBox/StockSearchBox";

const InitialPortfolio: React.FC = () => {
  return (
    <div id="initial_portfolio">
      <InitialPortfolioWelcome />
      <InitialPortfolioBackground />
      <InitialPortfolioSubHeader />
      <InitialPortfolioSubContainer />
      <StockSearchBox />
    </div>
  );
};

export default InitialPortfolio;
