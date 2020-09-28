import React, { useContext, useState, useEffect } from "react";
import FeedSidebar from "./FeedSidebar";
import NavBar from "../misc/NavBar";
import Feed from "./Feed";
import Explore from "./Explore";
import UserPosts from "./UserPosts";
import Following from "./Following";
import Followers from "./Followers";
import UserProfile from "../User/UserProfile";
import Profile from "./profile/Profile";
import UserTrade from "./UserTrade";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { queryToken } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { statusContext, userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const [userRoutePaths, setUserRoutePaths] = useState([]);
  const [tradeRoutePaths, setTradeRoutePaths] = useState([]);

  const [passToken, { data, loading }] = useLazyQuery(queryToken);

  const { userVal } = useContext(userContext);
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      let sessionToken = sessionStorage.getItem("Token");
      if (sessionToken) {
        passToken({
          variables: {
            token: sessionToken,
          },
        });
      } else {
        browserHist.push("/login");
      }
    }
  }, []);

  useEffect(() => {
    let sessionToken = sessionStorage.getItem("Token");
    if (data) {
      console.log(data);
      if (data.token.token === sessionToken) {
        setStatus(true);
      } else {
        setStatus(false);
        browserHist.push("/login");
      }
    }
  }, data);

  function modRoutes(route: any) {
    setUserRoutePaths(route);
    console.log("Routes: ");
    console.log(route);
  }

  function modTradeRoutes(route: any) {
    setTradeRoutePaths(route);
  }

  return (
    <div>
      <NavBar />
      <div id="homepage">
        <FeedSidebar />
        <Switch>
          <Route exact path="/home">
            <Feed modRoutes={modRoutes} />
          </Route>
          <Route exact path="/home/profile">
            <Profile username={userVal.username} />
          </Route>
          <Route exact path="/home/explore" component={Explore} />
          <Route exact path="/home/posts">
            <UserPosts modRoutes={modTradeRoutes} />
          </Route>
          <Route exact path="/home/followers">
            <Followers modRoutes={modRoutes} />
          </Route>
          <Route exact path="/home/following">
            <Following modRoutes={modRoutes} />
          </Route>
          {userRoutePaths.map((userId: number) => (
            <Route key={userId} path={`/home/user/${userId}`}>
              <UserProfile userId={userId} />
            </Route>
          ))}
          {tradeRoutePaths.map((tradeId: number) => (
            <Route key={tradeId} path={`/home/post/${tradeId}`}>
              <UserTrade tradeId={tradeId} />
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default Homepage;
