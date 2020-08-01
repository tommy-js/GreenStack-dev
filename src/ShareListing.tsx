import React, { useState, useEffect } from "react";

interface Props {
  title: string;
  ticker: string;
  purchasePrice: number;
  currentPrice: number;
  shares: number;
}

const ShareListing: React.FC<Props> = (props) => {
  const [totalPurchasePrice, setTotalPurchasePrice] = useState();
  const [totalCurrentPrice, setTotalCurrentPrice] = useState();
  const [earnings, setEarnings] = useState();

  useEffect(() => {
    let purchaseVal = props.purchasePrice * props.shares;
    let currentVal = props.currentPrice * props.shares;
    setTotalPurchasePrice(purchaseVal);
    setTotalCurrentPrice(currentVal);
    setEarnings(currentVal - purchaseVal);
  }, []);

  return (
    <div id="share_listing">
      <div id="left_share_component">
        <p>
          {props.title} ${props.ticker}
        </p>
        <p>Earnings: {earnings}</p>
      </div>
      <div id="trade_buttons">
        <button id="buy_button">buy</button>
        <button id="sell_button">sell</button>
        <p className="share_listing_additional_info">
          Bought: ${props.purchasePrice}
        </p>
        <p className="share_listing_additional_info">
          Current: ${props.currentPrice}
        </p>
      </div>
    </div>
  );
};

export default ShareListing;
