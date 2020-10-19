import React, { useContext } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  money: any;
}

const LiquidCapital: React.FC<Redux> = (props) => {
  return (
    <div>
      <div id="portfolio_graph"></div>
      <p>Liquid: ${props.money}</p>
    </div>
  );
};

export default connect(mapStateToProps)(LiquidCapital);
