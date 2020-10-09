import React, { useState, useEffect, useRef, createRef } from "react";
import { LoadingGeneral } from "../login/LoadingUser.tsx";
import { renderFull } from "stock-graphics";
import { useQuery } from "react-apollo";
import { requestDataQuery } from "../queries/queries.js";

const CompanyGraph = ({ title, ticker }) => {
  const reference = createRef();
  const [loaded, setLoaded] = useState(false);
  const [points, setPoints] = useState([]);
  const { data, loading } = useQuery(requestDataQuery, {
    variables: { ticker: ticker },
  });

  useEffect(() => {
    if (data) {
      setPoints(data.requestData);
    }
  }, [data]);

  useEffect(() => {
    if (points.length > 0) {
      renderEl();
    }
  }, [points]);

  function renderEl() {
    const graphicalEffects = {
      graphHeight: "100%",
      graphWidth: "100%",
      graphLeft: 0,
      graphRight: 0,
      positioning: "0",
      title: `${title}`,
      ticker: `${ticker}`,
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
  }

  function returnInfo() {
    if (points.length > 0) {
      return null;
    } else {
      return (
        <div>
          <LoadingGeneral />
        </div>
      );
    }
  }

  return <div id="company_graph_block">{returnInfo()}</div>;
};

export default CompanyGraph;
