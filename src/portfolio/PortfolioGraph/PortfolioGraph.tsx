import React, { useState, useEffect } from "react";
import PortfolioAssetsGraph from "../PortfolioAssetsGraph/PortfolioAssetsGraph.jsx";
import { LoadingGeneral } from "../../login/Loading/Loading";
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

const PortfolioGraphRender: React.FC<Redux> = (props) => {
  const [renderPts, setRenderPts] = useState();
  const [callQuery, { data }] = useLazyQuery(requestDataSetQuery);

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
        <PortfolioAssetsGraph
          points={renderPts}
          graphicalEffects={PortData.graphicalEffects}
          contentsDiv="portfolio_graph_render"
        />
      );
    } else return <LoadingGeneral />;
  }

  return <div id="portfolio_graph">{renderFunct()}</div>;
};

export const PortfolioGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioGraphRender);
