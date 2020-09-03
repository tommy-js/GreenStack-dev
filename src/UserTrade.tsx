import React, { useState, useContext } from "react";
import { userContext } from "./AppMain/App";
import Comment from "./misc/Comment";
import TickerHeader from "./TickerHeader";
import Header from "./Header";
import TradeInformation from "./TradeInformation";
import { Link } from "react-router-dom";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import {
  pushTradeToUserMutation,
  pushFollowerToUserMutation,
} from "./queries/queries.js";

interface Props {
  user: string;
  userId: number;
  tradeId: number;
  title: string;
  ticker: string;
  type: string;
  shares: number;
  price: number;
  gain: number;
  timestamp: number;
  pushTradeToUserMutation: (variables: object) => void;
  pushFollowerToUserMutation: (variables: object) => void;
}

const UserTrade: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const testData = [
    {
      user: "Tyler",
      comment: "Bad trade. Move on",
      commentId: 2323,
      timestamp: 2242423,
      likes: 3,
      dislikes: 63,
    },
    {
      user: "John",
      comment: "Good trade. Good man. Big gainz.",
      commentId: 394943,
      timestamp: 3553523,
      likes: 22322,
      dislikes: 1,
    },
  ];

  function followUser() {
    let randVal = Math.floor(Math.random() * 1000000);
    props.pushFollowerToUserMutation({
      variables: {
        userId: userVal.userId,
        followerId: props.userId,
        id: randVal,
        followerName: props.user,
        blocked: false,
      },
    });
  }

  function saveTrade() {
    props.pushTradeToUserMutation({
      variables: {
        userId: props.userId,
        tradeId: props.tradeId,
        price: props.price,
        timestamp: props.timestamp,
        title: props.title,
        ticker: props.ticker,
        shares: props.shares,
        gain: props.gain,
      },
    });
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
        <button onClick={() => followUser()}>Follow</button>
      </div>
      <div id="previous_trade_graph"></div>
      <div id="previous_trade_subinfo">
        <TradeInformation
          title={props.title}
          tradeId={props.tradeId}
          shares={props.shares}
          ticker={props.ticker}
          gain={props.gain}
          type={props.type}
          timestamp={props.timestamp}
          price={props.price}
          saveTrade={saveTrade}
        />
      </div>
      <div id="previous_trade_comments">
        {testData.map((el) => (
          <Comment
            user={el.user}
            comment={el.comment}
            commentId={el.commentId}
            timestamp={el.timestamp}
            likes={el.likes}
            dislikes={el.dislikes}
          />
        ))}
      </div>
    </div>
  );
};

export default compose(
  graphql(pushFollowerToUserMutation, { name: "pushFollowerToUser" })
)(UserTrade);
