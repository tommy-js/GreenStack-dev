import React from "react";
import AssetChart from "../AssetChart/AssetChart";
import AssetBreakdown from "../AssetBreakdown/AssetBreakdown";

const PortfolioData: React.FC = () => {
  return (
    <div>
      <h2>Data</h2>
      <AssetChart />
      <AssetBreakdown />
    </div>
  );
};

export default PortfolioData;
