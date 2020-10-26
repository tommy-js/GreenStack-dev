import React, { useContext } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";
import PortfolioGraph from "./PortfolioGraph";
import LiquidCapital from "./LiquidCapital";

interface Redux {
  money: any;
}

const Assets: React.FC<Redux> = (props) => {
  return (
    <div>
      <PortfolioGraph />
      <LiquidCapital />
      <p>Liquid: ${props.money}</p>
    </div>
  );
};

export default connect(mapStateToProps)(Assets);
