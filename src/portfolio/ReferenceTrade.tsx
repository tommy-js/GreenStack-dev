import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  user: string;
  tradeId: number;
  title: string;
  ticker: string;
  timestamp: number;
  removeTrade: (tradeId: number) => void;
}

const ReferenceTrade: React.FC<Props> = (props) => {
  const [display, setDisplay] = useState("block");

  function removeTrade() {
    setDisplay("none");
    props.removeTrade(props.tradeId);
  }

  return (
    <div style={{ display: display }}>
      <Link to={`/trade/${props.tradeId}`}>
        <p>{props.user}</p>
        <p>
          {props.title} #{props.ticker}
        </p>
        <p>{props.timestamp}</p>
      </Link>
      <button onClick={() => removeTrade()}>Remove</button>
    </div>
  );
};

export default ReferenceTrade;
