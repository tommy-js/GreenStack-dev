import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  title: string;
  ticker: string;
  purchasePrice: number;
  currentPrice: number;
  shares: number;
}

const NewTrade: React.FC<Props> = (props) => {
  const [shares, setShares] = useState(props.shares);
  const [totalGain, setTotalGain] = useState(props.currentPrice * props.shares);
  const [syntax, setSyntax] = useState("Cost: ");
  const [tradeCheckbox, setTradeCheckbox] = useState({
    buy: true,
    sell: false,
  });

  function calcVal(shareNum: string) {
    let sharesNow = parseInt(shareNum);
    setShares(sharesNow);
    let totalVal = props.currentPrice * sharesNow;
    setTotalGain(totalVal);
  }

  function setBuy() {
    setTradeCheckbox({ buy: true, sell: false });
    setSyntax("Cost: ");
  }

  function setSell() {
    setTradeCheckbox({ buy: false, sell: true });
    setSyntax("Gain: ");
  }

  function executeTrade() {
    // PASS DATA TO MONGO
  }

  return (
    <div>
      <h1>
        {props.title} #{props.ticker}
      </h1>
      <label>Buy</label>
      <input
        type="checkbox"
        onChange={() => setBuy()}
        checked={tradeCheckbox.buy}
      />
      <label>Sell</label>
      <input
        type="checkbox"
        onChange={() => setSell()}
        checked={tradeCheckbox.sell}
      />
      <label>Shares: </label>
      <input
        min="0"
        type="number"
        value={shares}
        onChange={(e) => calcVal(e.target.value)}
      />
      <div>
        {syntax} ${totalGain}
      </div>
      <button onClick={() => executeTrade()}>Execute</button>
    </div>
  );
};

export default NewTrade;
