import React from "react";
import PortfolioAssetsGraph from "./PortfolioAssetsGraph";
import { PortData } from "./graphData.js";

const PortfolioGraph: React.FC = () => {
  return (
    <div>
      <div id="portfolio_graph">
        <PortfolioAssetsGraph
          points={}
          graphicalEffects={PortData.graphicalEffects}
          contentsDiv="portfolio_graph_render"
        />
      </div>
    </div>
  );
};

export default PortfolioGraph;
