import React, { useContext, useEffect } from "react";
import { CompanyInformationBlock } from "../CompanyInformationBlock/CompanyInformationBlock";
import { CompanyNewsBlock } from "../CompanyNewsBlock/CompanyNewsBlock";
import { CompanyComments } from "../CompanyComments/CompanyComments";
import { CompanyOptions } from "../CompanyOptions/CompanyOptions";
import { CompanyGraph } from "../CompanyGraph/CompanyGraph.jsx";
import { CompanyDescription } from "../CompanyDescription/CompanyDescription";
import { statusContext } from "../../AppMain/App/App";
import { browserHist } from "../../AppMain/history";

interface Props {
  title: string;
  ticker: string;
  stockId: string;
  description: string;
  price: number;
}

export const StockPage: React.FC<Props> = (props) => {
  const { status } = useContext(statusContext);

  useEffect(() => {
    if (status === false) browserHist.push("/login");
  }, []);

  return (
    <div className="stock_page">
      <CompanyInformationBlock title={props.title} />
      <CompanyGraph title={props.title} ticker={props.ticker} />
      <CompanyDescription title={props.title} description={props.description} />
      <CompanyNewsBlock title={props.title} />
      <CompanyOptions
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
