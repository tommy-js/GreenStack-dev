import React from "react";
import AssetChart from "./AssetChart";
import IndustryInvolvementChart from "./IndustryInvolvementChart";
import AssetBreakdown from "./AssetBreakdown";

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
