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
      console.log(data);
    }
  }, [data]);

  console.log(props.stocks);

  function renderFunct() {
    if (renderPts) {
      return (
        <div>
          <PortfolioAssetsGraph
            points={props.oneday}
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
