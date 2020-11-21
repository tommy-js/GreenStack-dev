import React, { useState } from "react";
import InitialPortfolio from "./InitialPortfolio";
import DefaultPortfolio from "./DefaultPortfolio";

interface Props {
  stocks: any;
  watchlist: any;
}

const PortfolioBody: React.FC<Props> = (props) => {
  const [showInitial, setShowInitial] = useState(false);

  function returnInitial() {
    if (showInitial === true) {
      return <InitialPortfolio />;
    } else {
      return (
        <DefaultPortfolio stocks={props.stocks} watchlist={props.watchlist} />
      );
    }
  }

  return <div>{returnInitial()}</div>;
};

export default PortfolioBody;
