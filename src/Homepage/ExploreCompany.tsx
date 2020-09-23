import React from "react";
import { Link } from "react-router-dom";

interface Props {
  stockId: number;
  keyId: number;
  title: string;
  ticker: string;
  description: string;
  price: number;
  marketcap: number;
}

const ExploreCompany: React.FC<Props> = (props) => {
  return (
    <div key={props.keyId} className="homepage_block_component">
      <Link className="block_link" to={`/home/stock/${props.stockId}`}>
        <p>
          {props.title} #{props.ticker}
        </p>
        <p>{props.description}</p>
        <p>cost: ${props.price}</p>
        <p>marketcap: {props.marketcap}</p>
      </Link>
    </div>
  );
};

export default ExploreCompany;
