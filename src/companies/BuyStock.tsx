import React from "react";
import { Link } from "react-router-dom";

interface Props {
  stockId: string;
  title: string;
  ticker: string;
}

export const BuyStock: React.FC<Props> = (props) => {
  return (
    <div className="stock_page">
      <Link to={`/home/stock/${props.stockId}`}>Back</Link>
      <h2>Buy {props.title}</h2>
    </div>
  );
};

export const SellStock: React.FC<Props> = (props) => {
  return (
    <div className="stock_page">
      <Link to={`/home/stock/${props.stockId}`}>Back</Link>
      <h2>Sell {props.title}</h2>
    </div>
  );
};

export const OptionStock: React.FC<Props> = (props) => {
  return (
    <div className="stock_page">
      <Link to={`/home/stock/${props.stockId}`}>Back</Link>
      <h2>Trade Options on {props.title}</h2>
    </div>
  );
};
