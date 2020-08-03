import React, { createContext, useState, useEffect } from "react";
import Homepage from "./Homepage";
import companyProfiles from "./companyProfiles";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockPage from "./StockPage";
import SubscribePage from "./SubscribePage";
import Portfolio from "./Portfolio";
import AboutPage from "./AboutPage";
import LeaderBoard from "./LeaderBoard";
import UserTrade from "./UserTrade";
import User from "./User";
import LearnPage from "./LearnPage";
import Profile from "./Profile";
import Login from "./Login";
import generalKnowledge from "./generalKnowledge";
import optionsKnowledge from "./optionsKnowledge";
import "./App.scss";

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
}

export const userContext = createContext<any>({});
export const statusContext = createContext<any>(false);

function App() {
  const [tradeMap, setTradeMap] = useState();
  const [userMap, setUserMap] = useState();
  const [constantActivity, setConstantActivity] = useState();
  const [userVal, setUserVal] = useState<UserCont>({
    username: "TommyBoy",
    password: "123",
    userId: 0,
  });
  const [status, setStatus] = useState(false);

  useEffect(() => {
    // GET USER INFORMATION USING THE USERID
  }, []);

  function updateTradeMap(passInTradeMap: TradeData[]) {
    setTradeMap(passInTradeMap);
  }

  function updateUserMap(passInUserMap: User[]) {
    setUserMap(passInUserMap);
  }

  function updateConstantActivity(passInActivity: any) {
    setConstantActivity(passInActivity);
  }

  function returnConstantActivity() {
    if (constantActivity) {
      return (
        <div>
          {constantActivity.map((el: any) => (
            <Route exact path={`/trade/${el.tradeId}`}>
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
        </div>
      );
    }
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
                {companyProfiles.map((el) => (
                  <Route path={`/${el.ticker}`}>
                    <StockPage title={el.title} ticker={el.ticker} />
                  </Route>
                ))}
                {returnTradePath()}
                {returnConstantActivity()}
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
      </userContext.Provider>
    </statusContext.Provider>
  );
}

export default App;
