import React, { createContext, useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import Page404 from "./Page404";
import { ApolloProvider } from "react-apollo";
import { Router, Route, Switch, Redirect } from "react-router-dom";
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
    <div className="App">
      <statusContext.Provider value={{ status, setStatus }}>
        <userContext.Provider value={{ userVal, setUserVal }}>
          <ApolloProvider client={client}>
            <Router history={browserHist}>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/information" component={AppInformation} />
                <MainRender />
                <Route path="/404" component={Page404} />
                <Redirect to="/404" />
              </Switch>
            </Router>
          </ApolloProvider>
        </userContext.Provider>
      </statusContext.Provider>
    </div>
  );
}

export default App;
