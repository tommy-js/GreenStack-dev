import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  ticker: string;
  price: number;
}

const WatchListing: React.FC<Props> = (props) => {
  return (
    <div>
      <Link to={`/${props.ticker}`}>
        <p>
          {props.title} ${props.ticker}
        </p>
      </Link>
      <p>price: {props.price}</p>
    </div>
  );
};

export default WatchListing;
