import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../AppMain/App";
import Comment from "../misc/Comment";
import { CommentInputTrade } from "./CommentInput";
import Header from "../User/Header";
import TradeInformation from "./TradeInformation";
import FollowUser from "../resolvers/FollowUser";

import { Link } from "react-router-dom";
import { flowRight as compose } from "lodash";
import { graphql, useLazyQuery } from "react-apollo";
import { queryTradeQuery } from "../queries/queries.js";

interface Props {
  tradeId: any;
}

const UserTrade: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [queryTrade, { loading, data }] = useLazyQuery(queryTradeQuery, {
    variables: { tradeId: props.tradeId },
  });
  const [tradeData, setTradeData] = useState({
    userId: 0,
    user: "",
    tradeId: "0",
    price: 0,
    timestamp: 0,
    title: "",
    ticker: "",
    shares: 0,
    gain: 0,
    type: "",
  });

  useEffect(() => {
    queryTrade();
    console.log("querying trade");
    console.log(props.tradeId);
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      setTradeData(data.getTrade);
    }
  }, [data]);

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

  function saveTrade() {}

  if (data) {
    return (
      <div id="previous_trade">
        <div id="previous_trade_title">
          <Link to={`/user/${tradeData.userId}`}>
            <Header text={tradeData.user} />
          </Link>
          <FollowUser tradeData={tradeData} userId={userVal.userId} />
        </div>
        <div id="previous_trade_graph"></div>
        <div id="previous_trade_subinfo">
          <TradeInformation
            title={tradeData.title}
            tradeId={tradeData.tradeId}
            shares={tradeData.shares}
            ticker={tradeData.ticker}
            gain={tradeData.gain}
            type={tradeData.type}
            timestamp={tradeData.timestamp}
            price={tradeData.price}
            saveTrade={saveTrade}
          />
        </div>
        <CommentInputTrade tradeId={props.tradeId} />
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
  } else {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
};

export default UserTrade;
