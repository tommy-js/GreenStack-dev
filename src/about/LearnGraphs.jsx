import React, { useEffect } from "react";
import { renderFull } from "stock-graphics";

const LearnGraphs = (props) => {
  useEffect(() => {
    renderFull(props.points, props.graphicalEffects);
  }, []);

  return <div id="graph_learning_block"></div>;
};

export default LearnGraphs;
