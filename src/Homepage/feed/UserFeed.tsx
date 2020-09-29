import React, { useState, useEffect } from "react";
import Feed from "./Feed";
import Explore from "../explore/Explore";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const UserFeed: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={Feed} />
          <Route exact path="/home/explore" component={Explore} />
        </Switch>
      </Router>
    </div>
  );
};

export default UserFeed;
