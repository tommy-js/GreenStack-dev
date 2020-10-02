import React, { useState } from "react";

interface Props {
  type: string;
  title: string;
  ticker: string;
  shares: number;
}

const TradeDropdown: React.FC<Props> = (props) => {
  const [currentPrice, setCurrentPrice] = useState(1);
  const [shares, setShares] = useState(props.shares);
  const [validTrade, setValidTrade] = useState(true);

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

  return (
    <div id="trade_dropdown">
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
};

export default TradeDropdown;
