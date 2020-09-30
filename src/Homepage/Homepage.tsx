import React, { useContext, useState, useEffect } from "react";
import FeedSidebar from "./sidebar/FeedSidebar";
import NavBar from "../navigation/NavBar";
import Feed from "./feed/Feed";
import Explore from "./explore/Explore";
import UserPosts from "./UserPosts";
import Following from "./Following";
import Followers from "./Followers";
import UserProfile from "../User/UserProfile";
import Profile from "./profile/Profile";
import UserTrade from "./UserTrade";
import LoadingUser from "../login/LoadingUser";
import UserLoginAuthSubresolver from "../resolvers/UserLoginAuthSubresolver";
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
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [userId, setUserId] = useState(0);

  const [passToken, { data, loading }] = useLazyQuery(queryToken);

  const { userVal } = useContext(userContext);
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    console.log("homepage status: " + status);
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
    console.log("homepage status: " + status);
    if (status === false) {
      let sessionToken = sessionStorage.getItem("Token");
      if (data && data.token) {
        console.log(data);
        console.log("session token same as data token");
        setUserId(data.token.userId);
        setLoadingInUser(true);
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

  function loggedIn() {
    setLoadingInUser(false);
  }

  function returnLoadingIcon() {
    if (status === true) {
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
    }
  }

  function returnLoading() {
    if (loadingInUser === true) {
      return (
        <div className="render_loading">
          <div className="drop_loading_block">
            <LoadingUser />
            <UserLoginAuthSubresolver id={userId} loggedIn={loggedIn} />
          </div>
        </div>
      );
    } else if (loadingInUser === false) {
      return <div>{returnLoadingIcon()}</div>;
    }
  }

  return <div>{returnLoading()}</div>;
};

export default Homepage;
