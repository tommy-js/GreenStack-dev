import React, { useState } from "react";
import TradeDropdown from "./TradeDropdown";
import { InputTrade } from "./CommentInput";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Props {
  type: string;
  tradeId: string;
  title: string;
  ticker: string;
  shares: number;
  timestamp: number;
  gain: number;
  price: number;
  saveTrade: () => void;
}

const TradeInformation: React.FC<Props> = (props) => {
  const [mirror, setMirror] = useState(false);
  function makeTradeDropdown() {
    if (mirror === true) {
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
    <div>
      <p>Type: {props.type}</p>
      <p>Time: {props.timestamp}</p>
      <p>Price per share: {props.price}</p>
      <p>Number of shares: {props.shares}</p>
      <p>Total gain: {props.gain}</p>
      <button onClick={() => setMirror(!mirror)}>Mirror trade</button>
      <button onClick={() => props.saveTrade()}>
        Save trade for reference
      </button>
      <InputTrade tradeId={props.tradeId} />
      {makeTradeDropdown()}
    </div>
  );
};

export default connect(mapStateToProps)(TradeInformation);
