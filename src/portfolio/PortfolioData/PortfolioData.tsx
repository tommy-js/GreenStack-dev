import React from "react";
import { AssetChart } from "../AssetChart/AssetChart";
import { AssetBreakdown } from "../AssetBreakdown/AssetBreakdown";

export const PortfolioData: React.FC = () => {
  return (
    <React.Fragment>
      <h2>Data</h2>
      <AssetChart />
      <AssetBreakdown />
    </React.Fragment>
  );
};
