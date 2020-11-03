import React, { useContext, useState, useEffect } from "react";
import FeedSidebar from "./sidebar/FeedSidebar";
import NavBar from "../navigation/NavBar";
import Feed from "./feed/Feed";
import Explore from "./explore/Explore";
import UserPosts from "./post/UserPosts";
import Following from "./Following";
import Followers from "./Followers";
import UserProfile from "../User/UserProfile";
import Profile from "./profile/Profile";
import UserTrade from "./UserTrade";
import { LoadingUser } from "../login/LoadingUser";
import SearchResults from "./SearchResults";
import PostPage from "./post/PostPage";
import FeedModal from "./feed/FeedModal";
import UserLoginAuthSubresolver from "../resolvers/UserLoginAuthSubresolver";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  BuyStockPage,
  SellStockPage,
  OptionStockPage,
} from "../companies/BuyStock";
import StockPage from "../companies/StockPage";
import { queryToken } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import companyProfiles from "../companies/companyProfiles";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  userId: any;
  username: string;
  posts: any;
  feed: any;
}

interface Props extends Redux {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState([] as any);
  const [userRoutePaths, setUserRoutePaths] = useState([] as any);
  const [tradeRoutePaths, setTradeRoutePaths] = useState([] as any);
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [userId, setUserId] = useState();
  const [results, setResults] = useState({ username: "", userId: "", bio: "" });

  const [passToken, { data, loading }] = useLazyQuery(queryToken);

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
      if (data && data.token) {
        console.log(data);
        console.log("session token same as data token");
        setUserId(data.token.userId);
        setLoadingInUser(true);
      }
    }
  }, data);

  function modRoutes(route: any) {
    let findEl = userRoutePaths.find((el: any) => el.userId === route.userId);
    if (!findEl) {
      setUserRoutePaths(route);
    }
  }

  function modTradeRoutes(route: any) {
    setTradeRoutePaths(route);
  }

  function loggedIn() {
    setLoadingInUser(false);
  }

  function modRes(username: string, userId: string, bio: string) {
    let arr: any[] = userRoutePaths;
    let index = { userId };
    arr.push(index);
    setResults({ username: username, userId: userId, bio: bio });
    setUserRoutePaths(arr);
    browserHist.push("/home/search");
  }

  function modPosts(routes: any) {
    setPosts(routes);
  }

  function feedPathRender() {
    if (props.feed) {
      return (
        <div>
          {props.feed.map((el: any) => (
            <Route path={`/home/post/${el.postId}`}>
              <FeedModal data={el} />
            </Route>
          ))}
        </div>
      );
    }
  }

  function returnLoadingIcon() {
    if (status === true) {
      return (
        <div>
          <NavBar />
          <div id="homepage">
            <FeedSidebar modRes={modRes} />
            <Route exact path="/home">
              <Feed modRoutes={modRoutes} />
            </Route>
            <Route exact path="/home/search">
              <SearchResults results={results} />
            </Route>
            <Route exact path="/home/profile">
              <Profile username={props.username} />
            </Route>
            <Route exact path="/home/explore" component={Explore} />
            <Route exact path="/home/posts">
              <UserPosts modRoutes={modPosts} />
            </Route>
            {posts.map((el: any) => (
              <Route key={el.postId} path={`/home/post/${el.postId}`}>
                <PostPage postId={el.postId} />
              </Route>
            ))}
            <Route exact path="/home/followers">
              <Followers modRoutes={modRoutes} />
            </Route>
            <Route exact path="/home/following">
              <Following modRoutes={modRoutes} />
            </Route>
            {userRoutePaths.map((el: any) => (
              <Route key={el.userId} path={`/home/user/${el.userId}`}>
                <UserProfile
                  inspectUsername={el.username}
                  inspectUserId={el.userId}
                  inspectBio={el.bio}
                  modRoutes={modPosts}
                />
              </Route>
            ))}
            {tradeRoutePaths.map((tradeId: number) => (
              <Route key={tradeId} path={`/home/post/${tradeId}`}>
                <UserTrade tradeId={tradeId} />
              </Route>
            ))}
            {companyProfiles.map((el: any) => (
              <div>
                <Route
                  exact
                  key={el.stockId}
                  path={`/home/stock/${el.stockId}`}
                >
                  <StockPage
                    stockId={el.stockId}
                    title={el.title}
                    ticker={el.ticker}
                    description={el.description}
                    price={el.price}
                  />
                </Route>
                <Route
                  key={el.stockId}
                  exact
                  path={`/home/stock/${el.stockId}/buy`}
                >
                  <BuyStockPage
                    stockId={el.stockId}
                    title={el.title}
                    ticker={el.ticker}
                    price={el.price}
                  />
                </Route>
                <Route
                  key={el.stockId}
                  exact
                  path={`/home/stock/${el.stockId}/sell`}
                >
                  <SellStockPage
                    stockId={el.stockId}
                    title={el.title}
                    ticker={el.ticker}
                    price={el.price}
                  />
                </Route>
                <Route
                  key={el.stockId}
                  exact
                  path={`/home/stock/${el.stockId}/options`}
                >
                  <OptionStockPage
                    stockId={el.stockId}
                    title={el.title}
                    ticker={el.ticker}
                    price={el.price}
                  />
                </Route>
                {feedPathRender()}
              </div>
            ))}
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

export default connect(mapStateToProps)(Homepage);
