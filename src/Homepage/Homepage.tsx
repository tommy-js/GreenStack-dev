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
import PortfolioValuePostModal from "./PortfolioValuePostModal";
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
  userRoutes: any;
  money: any;
  onInitialPostsSet: (posts: any) => void;
  onInitialFollowerSet: (followers: any) => void;
  onInitialFollowingSet: (following: any) => void;
  onInitialNotificationsSet: (notifications: any) => void;
  onWatchlistSet: (watchlist: any) => void;
  onHistorySet: (history: any) => void;
  onUserRouteSet: (userRoutes: any) => void;
}

interface Props extends Redux {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState([] as any);
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [companies, setCompanies] = useState([] as any);
  const [technology, setTechnology] = useState([] as any);
  const [manufacturing, setManufacturing] = useState([] as any);
  const [energy, setEnergy] = useState([] as any);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [results, setResults] = useState({} as any);

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
    console.log("props.userRoutes");
    console.log(props.userRoutes);
  }, [props.userRoutes]);

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
      props.onInitialPostsSet(getUserData.noTokenMod.posts);
      props.onInitialFollowerSet(getUserData.noTokenMod.followers);
      props.onInitialFollowingSet(getUserData.noTokenMod.following);
      props.onInitialNotificationsSet(getUserData.noTokenMod.notifications);
      props.onWatchlistSet(getUserData.noTokenMod.watchlist);
      props.onHistorySet(getUserData.noTokenMod.history);
    }
  }, [getUserData]);

  useEffect(() => {
    if (status === false) {
      if (data && data.token) {
        setUserId(data.token.userId);
        setLoadingInUser(true);
      }
    }
  }, data);

  function modRoutes(route: any) {
    let findEl = props.userRoutes.find((el: any) => el.userId === route.userId);
    if (!findEl) {
      let routes = [...props.userRoutes, route];
      props.onUserRouteSet(routes);
    }
  }

  function loggedIn() {
    setLoadingInUser(false);
  }

  function modPosts(routes: any) {
    setPosts(routes);
  }

  function modRes(searchData: any, dataType: number) {
    let arr: any[] = props.userRoutes;
    let obj;
    if (dataType === 0) {
      obj = {
        username: searchData.username,
        userId: searchData.userId,
        profileImage: searchData.profileImage,
        bio: searchData.bio,
        dataType: dataType,
      };
      let findEl = props.userRoutes.find(
        (el: any) => el.userId === searchData.userId
      );
      if (!findEl) {
        arr.push(obj);
        let routes = [...props.userRoutes, obj];
        props.onUserRouteSet(routes);
      }
    } else if (dataType === 1) {
      obj = {
        title: searchData.title,
        ticker: searchData.ticker,
        description: searchData.description,
        country: searchData.country,
        stockId: searchData.stockId,
        dataType: dataType,
      };
      let findEl = props.userRoutes.find(
        (el: any) => el.userId === searchData.stockId
      );
      if (!findEl) {
        arr.push(obj);
        let routes = [...props.userRoutes, obj];
        props.onUserRouteSet(routes);
      }
    }

    setResults(obj);
    browserHist.push("/home/search");
  }

  const [postingToFeed, setPostingToFeed] = useState(false);

  function renderShowPostOptions() {
    if (postingToFeed === true) {
      return (
        <PortfolioValuePostModal
          setPostingToFeed={() => setPostingToFeed(false)}
        />
      );
    } else return null;
  }

  function returnLoadingIcon() {
    if (status === true) {
      return (
        <div>
          <NavBar />
          <div id="homepage">
            {renderShowPostOptions()}
            <FeedSidebar
              modRes={modRes}
              setPostingToFeed={() => setPostingToFeed(true)}
            />
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
            <Route exact path="/home/followers">
              <Followers modRoutes={modRoutes} />
            </Route>
            <Route exact path="/home/following">
              <Following modRoutes={modRoutes} />
            </Route>
            {props.userRoutes.map((el: any) => (
              <Route key={el.userId} path={`/home/user/${el.userId}`}>
                <UserProfile
                  inspectUsername={el.username}
                  inspectProfileImage={el.profileImage}
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
