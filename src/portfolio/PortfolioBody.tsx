import React from "react";
import InitialPortfolio from "./InitialPortfolio";
import DefaultPortfolio from "./DefaultPortfolio";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  stocks: any;
  watchlist: any;
  newPortfolio: boolean;
}

const PortfolioBody: React.FC<Redux> = (props) => {
  function returnInitial() {
    if (props.newPortfolio === true) {
      return <InitialPortfolio />;
    } else {
      return (
        <DefaultPortfolio stocks={props.stocks} watchlist={props.watchlist} />
      );
    }
  }

  return <div>{returnInitial()}</div>;
};

export default connect(mapStateToProps)(PortfolioBody);
