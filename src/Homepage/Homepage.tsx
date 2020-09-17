import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../AppMain/App";
import Suggested from "./Suggested";
import FeedSidebar from "./FeedSidebar";
import UserFeed from "./UserFeed";
import NavBar from "../misc/NavBar";
import Feed from "./Feed";
import Explore from "./Explore";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { userQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql, useLazyQuery } from "react-apollo";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div id="homepage">
        <FeedSidebar />
        <Suggested />
        <Switch>
          <Route exact path="/home" component={Feed} />
          <Route exact path="/home/explore" component={Explore} />
        </Switch>
      </div>
    </div>
  );
};

export default compose(graphql(userQuery, { name: "userQuery" }))(Homepage);
