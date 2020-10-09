import React from "react";
import { Link } from "react-router-dom";

interface Stock {
  stockId: number;
  title: string;
  ticker: string;
  sector: string;
  price: number;
  marketcap: number;
}

interface User {
  id: number;
  username: string;
  description: string;
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

export const ExploreUser: React.FC<User> = (props) => {
  return (
    <div className="explore_component">
      <Link to={`/home/user/${props.id}`} className="explore_component_link">
        <p>{props.username}</p>
        <p>{props.description}</p>
      </Link>
    </div>
  );
};
