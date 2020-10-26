import React, { useEffect } from "react";
import { renderFull } from "stock-graphics";

interface Props {
  points: any;
  graphicalEffects: any;
  contentsDiv: any;
}

const PortfolioAssetsGraph: React.FC<Props> = (props) => {
  useEffect(() => {
    renderFull(props.points, props.graphicalEffects);
  }, []);

  return (
    <div
      style={{ width: "100%", height: "375px" }}
      id={props.contentsDiv}
    ></div>
  );
};

export default PortfolioAssetsGraph;
