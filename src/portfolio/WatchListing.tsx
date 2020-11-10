import React from "react";
import { Link } from "react-router-dom";

interface Props {
  key: number;
  stockId: number;
  title: string;
  ticker: string;
}

const WatchListing: React.FC<Props> = (props) => {
  return (
    <div className="watch_listing" key={props.key}>
      <Link className="watch_listing_link" to={`/home/stock/${props.stockId}`}>
        <p>
          {props.title} ${props.ticker}
        </p>
      </Link>
    </div>
  );
};

export default WatchListing;
