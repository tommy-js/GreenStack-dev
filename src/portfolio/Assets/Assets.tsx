import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { PortfolioGraph } from "../PortfolioGraph/PortfolioGraph";

interface Redux {
  money: number;
}

const AssetsRender: React.FC<Redux> = (props) => {
  return (
    <div>
      <PortfolioGraph />
      <p>Liquid: ${props.money}</p>
    </div>
  );
};

export const Assets = connect(mapStateToProps)(AssetsRender);
