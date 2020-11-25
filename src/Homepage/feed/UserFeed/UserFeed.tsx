import React from "react";
import { Feed } from "../Feed/Feed";
import { Explore } from "../../explore/Explore/Explore";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

export const UserFeed: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Feed} />
        <Route exact path="/home/explore" component={Explore} />
      </Switch>
    </Router>
  );
};
