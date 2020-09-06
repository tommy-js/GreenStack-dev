import React, { useState, useContext } from "react";
import generalKnowledge from "../generalKnowledge";
import optionsKnowledge from "../about/optionsKnowledge";
import LearnPage from "../about/LearnPage";
import Profile from "../profile/Profile";
import StockPage from "../StockPage";
import SubscribePage from "../SubscribePage";
import Portfolio from "../portfolio/Portfolio";
import AboutPage from "../about/AboutPage";
import LeaderBoard from "../misc/LeaderBoard";
import Homepage from "../Homepage/Homepage";
import companyProfiles from "../companyProfiles";
import { Route } from "react-router-dom";
import User from "../User";
import { userContext } from "./App";

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

const MainRender: React.FC = () => {
  const [tradeMap, setTradeMap] = useState();
  const [userMap, setUserMap] = useState();
  const [constantActivity, setConstantActivity] = useState();
  const { userVal, setUserVal } = useContext(userContext);

  function updateTradeMap(passInTradeMap: TradeData[]) {
    setTradeMap(passInTradeMap);
  }

  function updateUserMap(passInUserMap: User[]) {
    setUserMap(passInUserMap);
  }

  function updateConstantActivity(passInActivity: any) {
    setConstantActivity(passInActivity);
  }

  function returnTradePath() {
    if (tradeMap && userMap) {
      return (
        <div>
          {userMap.map((el: User) => (
            <Route path={`/user/${el.userId}`}>
              <User
                user={el.user}
                userId={el.userId}
                netWorth={el.netWorth}
                timeInMarket={el.timeInMarket}
              />
            </Route>
          ))}
        </div>
      );
    } else return null;
  }

  return (
    <div>
      <div id="push_under_navbar">
        <Route path="/signin">
          <SubscribePage />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/leaderboard">
          <LeaderBoard
            updateUserMap={updateUserMap}
            updateTradeMap={updateTradeMap}
          />
        </Route>
        <Route exact path="/">
          <Homepage updateConstantActivity={updateConstantActivity} />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {companyProfiles.map((el: any) => (
          <Route path={`/${el.ticker}`}>
            <StockPage
              stockId={el.stockId}
              title={el.title}
              ticker={el.ticker}
            />
          </Route>
        ))}
        {returnTradePath()}
        <Route path="/about/learn/general">
          <LearnPage data={generalKnowledge} />
        </Route>
        <Route path="/about/learn/options">
          <LearnPage data={optionsKnowledge} />
        </Route>
      </div>
    </div>
  );
};

export default MainRender;
