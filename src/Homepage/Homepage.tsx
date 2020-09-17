import React, { useContext, useState, useEffect } from "react";
import FeedSidebar from "./FeedSidebar";
import NavBar from "../misc/NavBar";
import Feed from "./Feed";
import Explore from "./Explore";
import Post from "./Post";
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
        <Switch>
          <Route exact path="/home" component={Feed} />
          <Route exact path="/home/explore" component={Explore} />
          <Route exact path="/home/post" component={Post} />
        </Switch>
      </div>
    </div>
  );
};

export default compose(graphql(userQuery, { name: "userQuery" }))(Homepage);
