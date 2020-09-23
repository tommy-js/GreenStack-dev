import React from "react";
import WatchListing from "./WatchListing";

interface Props {
  stocks: Keys[];
}

interface Keys {
  keyId: number;
  title: string;
  ticker: string;
  price: number;
}

const WatchStocks: React.FC<Props> = (props) => {
  return (
    <div>
      {props.stocks.map((el: Keys) => (
        <div key={el.keyId}>
          <WatchListing
            key={el.keyId}
            title={el.title}
            ticker={el.ticker}
            price={el.price}
          />
        </div>
      ))}
    </div>
  );
};

export default WatchStocks;
