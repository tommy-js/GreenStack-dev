import React from "react";
import { Link } from "react-router-dom";
import { Buy, Sell } from "./PurchasePage";

interface Props {
  stockId: string;
  title: string;
  ticker: string;
  price: number;
}

export const BuyStockPage: React.FC<Props> = (props) => {
  return (
    <div className="stock_page">
      <Link to={`/home/stock/${props.stockId}`}>Back</Link>
      <h2>
        Buy {props.title} #{props.ticker}
      </h2>
      <div>Chart</div>
      <Buy
        stockId={props.stockId}
        stockTitle={props.title}
        price={props.price}
      />
      <div>Data</div>
    </div>
  );
};

export const SellStockPage: React.FC<Props> = (props) => {
  return (
    <div className="stock_page">
      <Link to={`/home/stock/${props.stockId}`}>Back</Link>
      <h2>
        Sell {props.title} #{props.ticker}
      </h2>
      <div>Chart</div>
      <Sell
        stockId={props.stockId}
        stockTitle={props.title}
        price={props.price}
      />
      <div>Data</div>
    </div>
  );
};

export const OptionStockPage: React.FC<Props> = (props) => {
  return (
    <div className="stock_page">
      <Link to={`/home/stock/${props.stockId}`}>Back</Link>
      <h2>Trade Options on {props.title}</h2>
    </div>
  );
};
