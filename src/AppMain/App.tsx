import React, { createContext, useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Router, Route, Switch } from "react-router-dom";
import UserTrade from "../UserTrade";
import User from "../User";
import Login from "../login/Login";
import { browserHist } from "./history.js";
import MainRender from "./MainRender";
import AppInformation from "../AppInformation/AppInformation";

import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

interface UserCont {
  username: string;
  password: string;
  userId: number;
  membership: boolean;
  money: number;
  newaccount: boolean;
  darkmode: boolean;
  invisible: boolean;
  allowCommentsOnTrades: boolean;
  notifications: object[];
  trades: object[];
  referenceTrades: object[];
  progress: object[];
}

export const userContext = createContext<any>({});
export const statusContext = createContext<any>(false);

function App() {
  const [userVal, setUserVal] = useState({});
  const [status, setStatus] = useState(false);

  return (
    <statusContext.Provider value={{ status, setStatus }}>
      <userContext.Provider value={{ userVal, setUserVal }}>
        <ApolloProvider client={client}>
          <Router history={browserHist}>
            <Switch>
              <div className="App">
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/information">
                  <AppInformation />
                </Route>
                <MainRender />
              </div>
            </Switch>
          </Router>
        </ApolloProvider>
      </userContext.Provider>
    </statusContext.Provider>
  );
}

export default App;
