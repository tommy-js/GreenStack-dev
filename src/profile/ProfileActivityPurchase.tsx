import React, { useState } from "react";
import { Link } from "react-router-dom";
import TradeDropdown from "../TradeDropdown";

interface Props {
  type: string;
  user: string;
  title: string;
  ticker: string;
  tradeId: number;
  shares: number;
  price: number;
  gain: number;
  timestamp: number;
}

const ProfileActivityPurchase: React.FC<Props> = (props) => {
  const [trading, setTrading] = useState(false);

  function saveToReference() {
    // PUSH TRADE TO MONGO FOR SAVING
  }

  function mirrorTrade() {
    // RETRIEVE CURRENT PRICE PER SHARE OF PROPS.TICKER
    // SETCURRENTPRICE(PRICE OF PROPS.TICKER)
    setTrading(true);
  }

  function tradeContainer() {
    if (trading === true) {
      return (
        <TradeDropdown
          type={props.type}
          title={props.title}
          ticker={props.ticker}
          shares={props.shares}
        />
      );
    } else return null;
  }

  return (
    <div id="profile_activity_container">
      <Link to={`/trade/${props.tradeId}`}>
        <p>{props.timestamp}</p>
        <p>
          {props.title} #{props.ticker}
        </p>
        <p>{props.user}</p>
        <p>type: {props.type}</p>
        <p>shares: {props.shares}</p>
        <p>price: ${props.price}</p>
        <p>gain: ${props.gain}</p>
      </Link>
      <button onClick={() => mirrorTrade()}>Mirror</button>
      <button onClick={() => saveToReference()}>
        Save Trade for Reference
      </button>
      {tradeContainer()}
    </div>
  );
};

export default ProfileActivityPurchase;
