import React from "react";

interface Props {
  title: string;
  ticker: string;
  price: number;
}

const WatchListing: React.FC<Props> = (props) => {
  return (
    <div>
      <p>
        {props.title} ${props.ticker}
      </p>
      <p>price: {props.price}</p>
    </div>
  );
};

export default WatchListing;
