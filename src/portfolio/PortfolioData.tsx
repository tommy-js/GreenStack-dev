import React from "react";
import AssetChart from "./AssetChart";
import IndustryInvolvementChart from "./IndustryInvolvementChart";

const PortfolioData: React.FC = () => {
  return (
    <div>
      <h2>Data</h2>
      <AssetChart />
      <IndustryInvolvementChart />
    </div>
  );
};

export default PortfolioData;
