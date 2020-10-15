import React, { useEffect } from "react";
import { renderFull } from "stock-graphics";

const LearnGraphs = (props) => {
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

export default LearnGraphs;
