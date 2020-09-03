import React, { createContext, useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Homepage from "../Homepage/Homepage";
import companyProfiles from "../companyProfiles";
import NavBar from "../misc/NavBar";
import LoadingUser from "../login/LoadingUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockPage from "../StockPage";
import SubscribePage from "../SubscribePage";
import Portfolio from "../portfolio/Portfolio";
import AboutPage from "../about/AboutPage";
import LeaderBoard from "../misc/LeaderBoard";
import UserTrade from "../UserTrade";
import User from "../User";
import LearnPage from "../about/LearnPage";
import Profile from "../profile/Profile";
import Login from "../login/Login";
import generalKnowledge from "../generalKnowledge";
import optionsKnowledge from "../about/optionsKnowledge";

import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

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

interface UserCont {
  username: string;
  password: string;
  userId: number;
  money: number;
  darkmode: boolean;
  invisible: boolean;
  allowCommentsOnTrades: boolean;
}

export const userContext = createContext<any>({});
export const statusContext = createContext<any>(false);

function App() {
  const [tradeMap, setTradeMap] = useState();
  const [userMap, setUserMap] = useState();
  const [constantActivity, setConstantActivity] = useState();
  const [userVal, setUserVal] = useState<UserCont>({
    username: "",
    password: "",
    userId: 0,
    money: 0,
    darkmode: false,
    invisible: false,
    allowCommentsOnTrades: false,
  });
  const [status, setStatus] = useState(false);

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
          {tradeMap.map((el: TradeData) => (
            <Route path={`/trade/${el.tradeId}`}>
              <UserTrade
                user={el.user}
                userId={el.userId}
                title={el.title}
                ticker={el.ticker}
                type={el.type}
                shares={el.shares}
                price={el.price}
                gain={el.gain}
                timestamp={el.timestamp}
              />
            </Route>
          ))}
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
    <statusContext.Provider value={status}>
      <userContext.Provider value={{ userVal, setUserVal }}>
        <ApolloProvider client={client}>
          <Router>
            <Switch>
              <div className="App">
                <NavBar />
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
                  <Route path="/login">
                    <Login />
                  </Route>
                </div>
              </div>
            </Switch>
          </Router>
        </ApolloProvider>
      </userContext.Provider>
    </statusContext.Provider>
  );
}

export default App;
