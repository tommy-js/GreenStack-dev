import React, { useEffect, useState } from "react";
import UserMap from "../UserMap";
import ExplorePageMenu from "../ExplorePageMenu";
import NavBar from "./NavBar";

interface TradeData {
  user: string;
  userId: number;
  title: string;
  ticker: string;
  type: string;
  tradeId: number;
  shares: number;
  price: number;
  gain: number;
  timestamp: number;
}

interface User {
  user: string;
  userId: number;
  netWorth: number;
  timeInMarket: number;
}

interface Props {
  updateUserMap: (passInUserMap: User[]) => void;
  updateTradeMap: (passInTradeMap: TradeData[]) => void;
}

const LeaderBoard: React.FC<Props> = (props) => {
  const [topTrades, setTopTrades] = useState();
  const [topUsers, setTopUsers] = useState();

  const testData = [
    {
      user: "John",
      userId: 0,
      netWorth: 2423242423.44,
      timeInMarket: 353432,
      recentTrades: [
        {
          user: "John",
          userId: 0,
          title: "Apple",
          ticker: "AAPL",
          type: "Sell",
          tradeId: 0,
          shares: 22,
          price: 132,
          gain: 12.63,
          timestamp: 3432423,
        },
        {
          user: "John",
          userId: 0,
          title: "Tesla",
          ticker: "TSLA",
          type: "Buy",
          tradeId: 1,
          shares: 7,
          price: 743.72,
          gain: -4294.53,
          timestamp: 343211,
        },
      ],
    },
    {
      user: "Tyler",
      userId: 1,
      netWorth: 356774.21,
      timeInMarket: 36664,
      recentTrades: [
        {
          user: "Tyler",
          userId: 1,
          title: "Microsoft",
          ticker: "MSFT",
          type: "Sell",
          tradeId: 2,
          shares: 22,
          price: 132,
          gain: 12.63,
          timestamp: 393432423,
        },
        {
          user: "Tyler",
          userId: 1,
          title: "Pebble",
          ticker: "PBL",
          type: "Buy",
          tradeId: 3,
          shares: 7,
          price: 743.72,
          gain: -4294.53,
          timestamp: 3432433323,
        },
      ],
    },
  ];

  useEffect(() => {
    let arr = [];
    let user, netWorth, timeInMarket, userId, obj;
    for (let i = 0; i < testData.length; i++) {
      user = testData[i].user;
      netWorth = testData[i].netWorth;
      timeInMarket = testData[i].timeInMarket;
      userId = testData[i].userId;
      let obj = {
        user: user,
        userId: userId,
        netWorth: netWorth,
        timeInMarket: timeInMarket,
      };
      arr.push(obj);
    }
    props.updateUserMap(arr);
  }, []);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < testData.length; i++) {
      for (let j = 0; j < testData[i].recentTrades.length; j++) {
        arr.push(testData[i].recentTrades[j]);
      }
    }
    props.updateTradeMap(arr);
  }, []);

  return (
    <div id="leaderboard">
      <NavBar />
      <ExplorePageMenu />
      {testData.map((el) => (
        <div key={el.userId}>
          <UserMap
            user={el.user}
            userId={el.userId}
            netWorth={el.netWorth}
            timeInMarket={el.timeInMarket}
            recentTrades={el.recentTrades}
          />
        </div>
      ))}
    </div>
  );
};

export default LeaderBoard;
