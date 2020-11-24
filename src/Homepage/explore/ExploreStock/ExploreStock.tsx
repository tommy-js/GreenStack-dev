import React from "react";
import { Link } from "react-router-dom";

interface Stock {
  stockId: string;
  title: string;
  ticker: string;
  sector: string;
  price: number;
  marketcap: number;
}

export const ExploreStock: React.FC<Stock> = (props) => {
  return (
    <div className="explore_component">
      <Link
        to={`/home/stock/${props.stockId}`}
        className="explore_component_link"
      >
        <p>
          {props.title} #{props.ticker}
        </p>
        <p>{props.sector}</p>
        <p>
          price: {props.price}, marketcap: {props.marketcap}
        </p>
      </Link>
    </div>
  );
};
