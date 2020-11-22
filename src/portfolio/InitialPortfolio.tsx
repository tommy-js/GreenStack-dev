import React, { useState } from "react";
import { InitialPortfolioWelcome } from "./InitialPortfolioWelcome/InitialPortfolioWelcome";
import { InitialPortfolioBackground } from "./InitialPortfolioBackground/InitialPortfolioBackground";
import { InitialPortfolioSubHeader } from "./InitialPortfolioSubHeader/InitialPortfolioSubHeader";
import { InitialPortfolioSubContainer } from "./InitialPortfolioSubContainer/InitialPortfolioSubContainer";
import StockSearchBox from "./StockSearchBox/StockSearchBox";

const InitialPortfolio: React.FC = () => {
  const [showSubContainer, setShowSubContainer] = useState(true);

  function parsingSearchResults(argument: boolean) {
    if (argument === true) setShowSubContainer(false);
    else setShowSubContainer(true);
  }

  return (
    <div id="initial_portfolio">
      <InitialPortfolioWelcome />
      <InitialPortfolioBackground />
      <InitialPortfolioSubHeader />
      <StockSearchBox parsingSearchResults={parsingSearchResults} />
      <InitialPortfolioSubContainer showSubContainer={showSubContainer} />
    </div>
  );
};

export default InitialPortfolio;
