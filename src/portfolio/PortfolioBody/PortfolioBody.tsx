import React from "react";
import InitialPortfolio from "./../InitialPortfolio/InitialPortfolio";
import DefaultPortfolio from "./../DefaultPortfolio/DefaultPortfolio";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

type WatchListItem = {
  stockId: string;
  title: string;
  ticker: string;
  timestamp: number;
};

interface Redux {
  stocks: StockItem[];
  watchlist: WatchListItem[];
  newPortfolio: boolean;
}

const PortfolioBody: React.FC<Redux> = (props) => {
  function returnInitial() {
    if (props.newPortfolio === true) {
      return <InitialPortfolio />;
    } else {
      return <DefaultPortfolio />;
    }
  }

  return <div>{returnInitial()}</div>;
};

export default connect(mapStateToProps)(PortfolioBody);
