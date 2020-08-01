import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  const [currentPrice, setCurrentPrice] = useState(0);
  const [shares, setShares] = useState(props.shares);
  const [validTrade, setValidTrade] = useState(true);

  function saveToReference() {
    // PUSH TRADE TO MONGO FOR SAVING
  }

  function mirrorTrade() {
    // RETRIEVE CURRENT PRICE PER SHARE OF PROPS.TICKER
    // SETCURRENTPRICE(PRICE OF PROPS.TICKER)
  }

  function executeMirror() {
    if (validTrade === true) {
      // EXECUTE TRADE HERE AND PASS TO MONGO
    } else {
      return null;
    }
  }

  function notifyer() {
    if (validTrade === false) {
      return <p style={{ color: "red" }}>Invalid Trade</p>;
    } else return null;
  }

  function calculateValue(cost: number, shares: number) {
    let totalVal = cost * shares;
    if (totalVal < 0) {
      setValidTrade(false);
    }
    return totalVal;
  }

  function tradeContainer() {
    return (
      <div>
        <p>
          {props.type} of {props.title} #{props.ticker}
        </p>
        <p>Current value: ${currentPrice}</p>
        <label>Shares: </label>
        <input
          min="0"
          type="number"
          value={shares}
          onChange={(e) => setShares(parseInt(e.target.value))}
        />
        <p>Cost/Income: {calculateValue(currentPrice, shares)}</p>
        <p>
          You currently have {props.shares} shares of {props.ticker}
        </p>
        <p>{notifyer()}</p>
        <button onClick={() => executeMirror()}>Execute</button>
      </div>
    );
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
