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
      <Link className="no_link" to={`/home/stock/${props.stockId}`}>
        <div id="left_share_component">
          <p id="share_listing_text">
            {props.title} ${props.ticker} (
            <span id="share_listing_minor">{props.shares} shares</span>)
          </p>
        </div>
        <div id="value_markers">${props.shares * 100}</div>
      </Link>
    </div>
  );
};

export default ShareListing;
