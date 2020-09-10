import React, { useState, useEffect } from "react";
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
  const [date, setDate] = useState("");

  useEffect(() => {
    let currentDate = new Date(props.timestamp * 1000);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDay();
    let concatDate = `${day}/${month}/${year}`;
    setDate(concatDate);
  }, []);

  function removeTrade() {
    setDisplay("none");
    props.removeTrade(props.tradeId);
  }

  return (
    <div className="reference_trade" style={{ display: display }}>
      <Link className="nav_el" to={`/trade/${props.tradeId}`}>
        <p>
          {props.user} {props.title} #{props.ticker}
        </p>
        <p>{date}</p>
      </Link>
      <button onClick={() => removeTrade()}>Remove</button>
    </div>
  );
};

export default ReferenceTrade;
