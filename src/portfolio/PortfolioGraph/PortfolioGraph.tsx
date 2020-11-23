import React, { useState, useEffect } from "react";
import PortfolioAssetsGraph from "../PortfolioAssetsGraph/PortfolioAssetsGraph.jsx";
import { LoadingGeneral } from "../../login/LoadingUser";
import { PortData } from "../graphData.js";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { connect } from "react-redux";
import { useLazyQuery } from "react-apollo";
import { requestDataSetQuery } from "../../queries/queries.js";
import { returnCapitalPrices } from "./index";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  oneday: any;
  stocks: StockItem[];
  onCurrentPricesSet: (currentPrices: any) => void;
}

const PortfolioGraph: React.FC<Redux> = (props) => {
  const [renderPts, setRenderPts] = useState();
  const [callQuery, { data, loading }] = useLazyQuery(requestDataSetQuery);

  useEffect(() => {
    let arr = props.stocks.map((el: StockItem) => el.ticker);
    callQuery({
      variables: {
        tickers: arr,
      },
    });
  }, []);

  useEffect(() => {
    if (data) {
      let returnedVal = returnCapitalPrices(props.stocks, data.requestData);
      props.onCurrentPricesSet(returnedVal.prices);
      setRenderPts(returnedVal.capital);
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

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioGraph);
