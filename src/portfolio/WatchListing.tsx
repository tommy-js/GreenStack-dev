import React from "react";
import { Link } from "react-router-dom";

interface Props {
  key: number;
  stockId: number;
  title: string;
  ticker: string;
  price: number;
}

const WatchListing: React.FC<Props> = (props) => {
  return (
    <div id="watch_listing" key={props.key}>
      <Link to={`/home/stock/${props.stockId}`}>
        <p>
          {props.title} ${props.ticker}
        </p>
      </Link>
    </div>
  );
};

export default WatchListing;
