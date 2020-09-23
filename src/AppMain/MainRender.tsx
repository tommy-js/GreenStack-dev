import React, { useEffect, useState, useContext } from "react";
import { BasicsPage, OptionsPage, ProtectionPage } from "../about/LearnPage";
import StockPage from "../companies/StockPage";
import SubscribePage from "../SubscribePage";
import Portfolio from "../portfolio/Portfolio";
import AboutPage from "../about/AboutPage";
import LeaderBoard from "../misc/LeaderBoard";
import Homepage from "../Homepage/Homepage";
import UserTrade from "../Homepage/UserTrade";
import NewAccountRender from "../NewAccountRender/NewAccountRender";
import companyProfiles from "../companies/companyProfiles";
import { Route, Switch } from "react-router-dom";
import { browserHist } from "./history.js";
import User from "../User";
import { userContext, statusContext } from "./App";

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
  const { status, setStatus } = useContext(statusContext);
  const [tradeMap, setTradeMap] = useState();
  const [userMap, setUserMap] = useState();
  const [constantActivity, setConstantActivity] = useState();
  const { userVal, setUserVal } = useContext(userContext);
  const [tradeId, setTradeId] = useState(0);
  const [newacc, setNewacc] = useState(false);

  useEffect(() => {
    // setNewacc(userVal.newaccount);
    setNewacc(false);
  }, [userVal]);

  function submit() {
    setNewacc(false);
  }

  function updateTradeMap(passInTradeMap: TradeData[]) {
    setTradeMap(passInTradeMap);
  }

  function updateUserMap(passInUserMap: User[]) {
    setUserMap(passInUserMap);
  }

  function updateConstantActivity(passInActivity: any) {
    setConstantActivity(passInActivity);
  }

  function passInTradeId(id: number) {
    setTradeId(id);
    console.log(id);
  }

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

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
  function returnRenderPath() {
    if (newacc === true) {
      return (
        <div>
          <NewAccountRender submit={submit} />
        </div>
      );
    } else if (newacc === false) {
      return (
        <div>
          <div id="push_under_navbar">
            <Switch>
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
              <Route path="/home">
                <Homepage updateConstantActivity={updateConstantActivity} />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
            </Switch>
            {companyProfiles.map((el: any) => (
              <Switch>
                <Route
                  key={el.stockId}
                  exact
                  path={`/home/stock/${el.stockId}`}
                >
                  <StockPage
                    stockId={el.stockId}
                    title={el.title}
                    ticker={el.ticker}
                  />
                </Route>
              </Switch>
            ))}
            {returnTradePath()}
            <Switch>
              <Route path="/about/learn/general">
                <BasicsPage />
              </Route>
              <Route path="/about/learn/options">
                <OptionsPage />
              </Route>
              <Route path="/about/learn/protection">
                <ProtectionPage />
              </Route>
            </Switch>
          </div>
        </div>
      );
    }
  }

  return <div>{returnRenderPath()}</div>;
};

export default MainRender;
