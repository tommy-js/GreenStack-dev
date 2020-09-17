import React from "react";

interface Stock {
  title: string;
  ticker: string;
  sector: string;
  price: number;
  marketcap: number;
}

interface User {
  username: string;
  description: string;
}

export const ExploreStock: React.FC<Stock> = (props) => {
  return (
    <div className="explore_component">
      <p>
        {props.title} #{props.ticker}
      </p>
      <p>{props.sector}</p>
      <p>
        price: {props.price}, marketcap: {props.marketcap}
      </p>
    </div>
  );
};

export const ExploreUser: React.FC<User> = (props) => {
  return (
    <div className="explore_component">
      <p>{props.username}</p>
      <p>{props.description}</p>
    </div>
  );
};
