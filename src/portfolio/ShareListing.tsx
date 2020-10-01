import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  stockId: string;
  title: string;
  ticker: string;
  price: number;
  shares: number;
}

const ShareListing: React.FC<Props> = (props) => {
  return (
    <div id="share_listing">
      <div id="left_share_component">
        <p>
          {props.title} ${props.ticker} ({props.shares} shares)
        </p>
      </div>
      <div id="trade_buttons">
        <Link to={`/home/stock/${props.stockId}`}>
          <div id="buy_button">Trade</div>
        </Link>
      </div>
    </div>
  );
};

export default ShareListing;
