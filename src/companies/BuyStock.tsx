import React from "react";

interface Props {
  stockId: string;
  title: string;
  ticker: string;
}

export const BuyStock: React.FC<Props> = (props) => {
  return (
    <div className="stock_page">
      <h2>Buy {props.title}</h2>
    </div>
  );
};

export const SellStock: React.FC<Props> = (props) => {
  return (
    <div className="stock_page">
      <h2>Sell {props.title}</h2>
    </div>
  );
};
