import React, { useState, useEffect } from "react";
import PortfolioAssetsGraph from "./PortfolioAssetsGraph.jsx";
import { LoadingGeneral } from "../login/LoadingUser";
import { PortData } from "./graphData.js";
import { mapStateToProps } from "../actions/actions";
import { connect } from "react-redux";
import { useLazyQuery } from "react-apollo";
import { requestDataSetQuery } from "../queries/queries.js";

interface Redux {
  oneday: any;
  stocks: any;
}

const PortfolioGraph: React.FC<Redux> = (props) => {
  const [renderPts, setRenderPts] = useState();
  const [callQuery, { data, loading }] = useLazyQuery(requestDataSetQuery);

  useEffect(() => {
    let arr = props.stocks.map((el: any) => el.ticker);
    callQuery({
      variables: {
        tickers: arr,
      },
    });
  }, []);

  useEffect(() => {
    if (data) {
      let capital = [];
      for (let l = 0; l < 99; l++) {
        let obj = { x: l, y: 0 };
        capital.push(obj);
      }
      let info = data.requestData;
      for (let k = 0; k < info.length; k++) {
        let foundEl = props.stocks.find(
          (el: any) => el.ticker === info[k].title
        );
        if (foundEl.shares > 0) {
          for (let i = 0; i < 99; i++) {
            let intVar = parseFloat(info[k].elements[i].y);
            let multVar = intVar * foundEl.shares;
            capital[i].y += multVar;
          }
        }
      }
      setRenderPts(capital);
    }
  }, [data]);

  console.log(props.stocks);

  function renderFunct() {
    if (renderPts) {
      return (
        <div>
          <PortfolioAssetsGraph
            points={renderPts}
            graphicalEffects={PortData.graphicalEffects}
            contentsDiv="portfolio_graph_render"
          />
        </div>
      );
    } else {
      return (
        <div>
          <LoadingGeneral />
        </div>
      );
    }
  }

  return (
    <div>
      <div id="portfolio_graph">{renderFunct()}</div>
    </div>
  );
};

export default connect(mapStateToProps)(PortfolioGraph);
