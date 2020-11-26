import React from "react";
import { Link } from "react-router-dom";

interface Props {
  key: number;
  stockId: string;
  title: string;
  ticker: string;
}

export const WatchlistElement: React.FC<Props> = (props) => {
  return (
    <Link
      key={props.key}
      className="watch_listing_link watch_listing"
      to={`/home/stock/${props.stockId}`}
    >
      <p>
        {props.title}{" "}
        <span className="watch_listing_ticker_span">#{props.ticker}</span>
      </p>
    </Link>
  );
};
