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
import { useLazyQuery, useQuery } from "react-apollo";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../actions/actions";
import {
  userQuery,
  nonTokenModifyUserQuery,
  getStocksQuery,
} from "../queries/queries";

interface Redux {
  userId: any;
  username: string;
  posts: any;
  feed: any;
  onInitialPostsSet: (posts: any) => void;
  onInitialFollowerSet: (followers: any) => void;
  onInitialFollowingSet: (following: any) => void;
  onInitialNotificationsSet: (notifications: any) => void;
  onWatchlistSet: (watchlist: any) => void;
  onHistorySet: (history: any) => void;
}

interface Props extends Redux {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState([] as any);
  const [userRoutePaths, setUserRoutePaths] = useState([] as any);
  const [tradeRoutePaths, setTradeRoutePaths] = useState([] as any);
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [companies, setCompanies] = useState([] as any);
  const [technology, setTechnology] = useState([] as any);
  const [manufacturing, setManufacturing] = useState([] as any);
  const [energy, setEnergy] = useState([] as any);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [results, setResults] = useState({ username: "", userId: "", bio: "" });

  const { data: companyData } = useQuery(getStocksQuery);
  const [passToken, { data, loading }] = useLazyQuery(userQuery);
  const [getUser, { data: getUserData }] = useLazyQuery(
    nonTokenModifyUserQuery,
    {
      pollInterval: 500,
    }
  );

  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (companyData) {
      let tech = [];
      let manu = [];
      let energ = [];
      let companies = companyData.getStocks;
      setCompanies(companies);
      for (let i = 0; i < companies.length; i++) {
        if (companies[i].sector === "Technology") {
          tech.push(companies[i]);
        } else if (companies[i].sector === "Manufacturing") {
          manu.push(companies[i]);
        } else if (companies[i].sector === "Energy") {
          energ.push(companies[i]);
        }
      }
      setTechnology(tech);
      setManufacturing(manu);
      setEnergy(energ);
    }
  }, [companyData]);

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
    } else {
      let sessionToken = sessionStorage.getItem("Token");
      if (sessionToken) {
        getUser({
          variables: {
            token: sessionToken,
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    if (getUserData) {
      console.log(getUserData.noTokenMod);
      props.onInitialPostsSet(getUserData.noTokenMod.posts);
      props.onInitialFollowerSet(getUserData.noTokenMod.followers);
      props.onInitialFollowingSet(getUserData.noTokenMod.following);
      props.onInitialNotificationsSet(getUserData.noTokenMod.notifications);
      props.onWatchlistSet(getUserData.noTokenMod.watchlist);
      props.onHistorySet(getUserData.noTokenMod.history);
    }
  }, [getUserData]);

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
            <Route exact path="/home/explore">
              <Explore
                companies={companies}
                technology={technology}
                manufacturing={manufacturing}
                energy={energy}
              />
            </Route>
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
            {companies.map((el: any) => (
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
            <UserLoginAuthSubresolver token={token} loggedIn={loggedIn} />
          </div>
        </div>
      );
    } else if (loadingInUser === false) {
      return <div>{returnLoadingIcon()}</div>;
    }
  }

  return <div>{returnLoading()}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
