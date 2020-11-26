import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { PortfolioGraph } from "../PortfolioGraph/PortfolioGraph";

interface Redux {
  money: number;
}

const AssetsRender: React.FC<Redux> = (props) => {
  return (
    <React.Fragment>
      <PortfolioGraph />
      <p>Liquid: ${props.money}</p>
    </React.Fragment>
  );
};

export const Assets = connect(mapStateToProps)(AssetsRender);
