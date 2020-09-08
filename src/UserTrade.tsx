import React, { useEffect, useState, useContext } from "react";
import { userContext } from "./AppMain/App";
import Comment from "./misc/Comment";
import TickerHeader from "./TickerHeader";
import Header from "./Header";
import TradeInformation from "./TradeInformation";
import { Link } from "react-router-dom";
import { flowRight as compose } from "lodash";
import { graphql, useLazyQuery } from "react-apollo";
import {
  pushFollowerToUserMutation,
  queryTradeQuery,
} from "./queries/queries.js";

interface Props {
  tradeId: number;
  pushTradeToUserMutation: (variables: object) => void;
  pushFollowerToUserMutation: (variables: object) => void;
}

const UserTrade: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [queryTrade, { loading, data }] = useLazyQuery(queryTradeQuery, {
    variables: { tradeId: props.tradeId },
  });
  const [tradeData, setTradeData] = useState({
    userId: 0,
    user: "",
    tradeId: 0,
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

  function followUser() {
    let randVal = Math.floor(Math.random() * 1000000);
    props.pushFollowerToUserMutation({
      variables: {
        userId: userVal.userId,
        followerId: tradeData.userId,
        id: randVal,
        followerName: tradeData.user,
        blocked: false,
      },
    });
  }

  function saveTrade() {
    props.pushTradeToUserMutation({
      variables: {
        userId: tradeData.userId,
        tradeId: tradeData.tradeId,
        price: tradeData.price,
        timestamp: tradeData.timestamp,
        title: tradeData.title,
        ticker: tradeData.ticker,
        shares: tradeData.shares,
        gain: tradeData.gain,
      },
    });
  }

  if (data) {
    return (
      <div id="previous_trade">
        <div id="previous_trade_title">
          <TickerHeader
            title={tradeData.title}
            ticker={tradeData.ticker}
            gain={tradeData.gain}
          />
          <Link to={`/user/${tradeData.userId}`}>
            <Header text={tradeData.user} />
          </Link>
          <button onClick={() => followUser()}>Follow</button>
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

export default compose(
  graphql(pushFollowerToUserMutation, { name: "pushFollowerToUser" })
)(UserTrade);
