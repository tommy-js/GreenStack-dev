import React, { useEffect, useRef, createRef } from "react";
import { renderFull } from "stock-graphics";

const CompanyGraph = () => {
  const reference = createRef();

  useEffect(() => {
    if (reference.current) {
      renderEl();
    }
  }, [reference]);

  function renderEl() {
    let points = [
      { x: "07/01", y: 91.28 },
      { x: "07/02", y: 91.96 },
      { x: "07/03", y: 92.5 },
      { x: "07/04", y: 93.85 },
      { x: "07/05", y: 94.18 },
      { x: "07/06", y: 96.26 },
      { x: "07/07", y: 95.33 },
      { x: "07/08", y: 97.26 },
      { x: "07/09", y: 94.84 },
      { x: "07/10", y: 98.99 },
      { x: "07/11", y: 96.56 },
      { x: "07/12", y: 96.26 },
      { x: "07/13", y: 96.99 },
      { x: "07/14", y: 96.42 },
      { x: "07/15", y: 94.84 },
      { x: "07/16", y: 98.99 },
      { x: "07/17", y: 96.56 },
      { x: "07/18", y: 94.84 },
      { x: "07/19", y: 98.99 },
      { x: "07/20", y: 96.56 },
      { x: "07/21", y: 96.26 },
      { x: "07/22", y: 96.99 },
      { x: "07/23", y: 96.42 },
      { x: "07/24", y: 94.84 },
      { x: "07/25", y: 98.99 },
      { x: "07/26", y: 99.23 },
      { x: "07/27", y: 102.42 },
      { x: "07/28", y: 98.56 },
      { x: "07/29", y: 99.83 },
      { x: "07/30", y: 97.21 },
    ];

    const graphicalEffects = {
      graphHeight: "100%",
      graphWidth: "100%",
      graphLeft: 0,
      graphRight: 0,
      positioning: "0",
      title: "Apple",
      ticker: "AAPL",
      fontSize: 18,
      backgroundColor: "white",
      lineWidth: 5,
      boundaryWidth: 3,
      gainColor: "green",
      lossColor: "red",
      fillColor: "red",
      dateRangeActive: false,
      graphFontSize: 14,
      infoDivWidth: 100,
      buttonSize: { width: 40, height: 25 },
      buttonFontSize: 10,
      buttonColor: "grey",
      buttonFontColor: "black",
      buttonBorder: "1px solid red",
      contentsDiv: "company_graph_block",
    };

    renderFull(points, graphicalEffects);
    // reference.current.appendChild(graph);
  }

  return <div id="company_graph_block" ref={reference}></div>;
};

export default CompanyGraph;
