import React, { useState } from "react";
import Comment from "./Comment";
import TickerHeader from "./TickerHeader";
import Header from "./Header";
import TradeDropdown from "./TradeDropdown";
import { Link } from "react-router-dom";

interface Props {
  user: string;
  userId: number;
  title: string;
  ticker: string;
  type: string;
  shares: number;
  price: number;
  gain: number;
  timestamp: number;
}

const UserTrade: React.FC<Props> = (props) => {
  const [mirror, setMirror] = useState(false);
  const testData = [
    {
      user: "Tyler",
      comment: "Bad trade. Move on",
      timestamp: 2242423,
      likes: 3,
      dislikes: 63,
    },
    {
      user: "John",
      comment: "Good trade. Good man. Big gainz.",
      timestamp: 3553523,
      likes: 22322,
      dislikes: 1,
    },
  ];

  function saveTrade() {
    // PASS TRADEID TO MONGO
  }

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
    <div id="previous_trade">
      <div id="previous_trade_title">
        <TickerHeader
          title={props.title}
          ticker={props.ticker}
          gain={props.gain}
        />
        <Link to={`/user/${props.userId}`}>
          <Header text={props.user} />
        </Link>
      </div>
      <div id="previous_trade_graph"></div>
      <div id="previous_trade_subinfo">
        <p>Type: {props.type}</p>
        <p>Time: {props.timestamp}</p>
        <p>Price per share: {props.price}</p>
        <p>Number of shares: {props.shares}</p>
        <p>Total gain: {props.gain}</p>
        <button onClick={() => setMirror(!mirror)}>Mirror trade</button>
        <button onClick={() => saveTrade()}>Save trade for reference</button>
        {makeTradeDropdown()}
      </div>
      <div id="previous_trade_comments">
        {testData.map((el) => (
          <Comment
            user={el.user}
            comment={el.comment}
            timestamp={el.timestamp}
            likes={el.likes}
            dislikes={el.dislikes}
          />
        ))}
      </div>
    </div>
  );
};

export default UserTrade;
