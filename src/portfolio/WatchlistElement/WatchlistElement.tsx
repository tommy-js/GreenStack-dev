import React from "react";
import { Link } from "react-router-dom";

interface Props {
  key: number;
  stockId: number;
  title: string;
  ticker: string;
}

const WatchlistElement: React.FC<Props> = (props) => {
  return (
    <Link className="watch_listing_link" to={`/home/stock/${props.stockId}`}>
      <div className="watch_listing" key={props.key}>
        <p>
          {props.title}{" "}
          <span className="watch_listing_ticker_span">#{props.ticker}</span>
        </p>
      </div>
    </Link>
  );
};

export default WatchlistElement;
