import React, { useContext, useState, useEffect } from "react";
import CompanyInformationBlock from "./CompanyInformationBlock";
import CompanyNewsBlock from "./CompanyNewsBlock.js";
import CompanyComments from "./CompanyComments";
import TradeBlock from "./TradeBlock";
import CompanyGraph from "./CompanyGraph.jsx";
import CompanyDescription from "./CompanyDescription";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  title: string;
  ticker: string;
  stockId: string;
  description: string;
  price: number;
}

const StockPage: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div className="stock_page">
      <CompanyInformationBlock title={props.title} />
      <CompanyGraph title={props.title} ticker={props.ticker} />
      <CompanyDescription title={props.title} description={props.description} />
      <CompanyNewsBlock title={props.title} />
      <TradeBlock
        stockId={props.stockId}
        title={props.title}
        ticker={props.ticker}
      />
      <CompanyComments
        title={props.title}
        ticker={props.ticker}
        stockId={props.stockId}
      />
    </div>
  );
};

export default StockPage;
