import React, { createContext, useState } from "react";
import ApolloClient from "apollo-boost";
import { Page404 } from "../Page404/Page404";
import { ApolloProvider } from "react-apollo";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Login } from "../../login/Login/Login";
import { browserHist } from "../history.js";
import { MainRender } from "../MainRender/MainRender";
import { AppInformation } from "../../AppInformation/AppInformation/AppInformation";

import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export const statusContext = createContext<any>(false);

export function App() {
  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <statusContext.Provider value={{ status, setStatus }}>
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
      </statusContext.Provider>
    </div>
  );
}
