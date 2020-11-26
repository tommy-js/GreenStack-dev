import React, { useContext, useState, useEffect } from "react";
import { FeedSidebar } from "../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { Feed } from "../feed/Feed/Feed";
import { Explore } from "../explore/Explore/Explore";
import { UserPosts } from "../post/UserPosts/UserPosts";
import { Following } from "../Following/Following";
import { Followers } from "../Followers/Followers";
import { UserProfile } from "../../User/UserProfile/UserProfile";
import { Profile } from "../profile/Profile/Profile";
import { LoadingUser } from "../../login/Loading/Loading";
import { SearchResults } from "../SearchResults/SearchResults";
import { PortfolioValuePostModal } from "../PortfolioValuePostModal/PortfolioValuePostModal";
import UserLoginAuthSubresolver from "../../resolvers/UserLoginAuthSubresolver";
import { Route } from "react-router-dom";
import { StockPage } from "../../companies/StockPage/StockPage";
import { useLazyQuery, useQuery } from "react-apollo";
import { statusContext } from "../../AppMain/App/App";
import { browserHist } from "../../AppMain/history";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import {
  userQuery,
  nonTokenModifyUserQuery,
  getStocksQuery,
} from "../../queries/queries";
import {
  PostItem,
  FeedItem,
  FollowerItem,
  FollowingItem,
  WatchListItem,
} from "../../types/types";
import { companySort } from "./index";

interface Redux {
  userId: string;
  username: string;
  posts: PostItem[];
  feed: FeedItem[];
  userRoutes: any;
  money: number;
  onInitialPostsSet: (posts: any) => void;
  onInitialFollowerSet: (followers: FollowerItem[]) => void;
  onInitialFollowingSet: (following: FollowingItem[]) => void;
  onInitialNotificationsSet: (notifications: any) => void;
  onWatchlistSet: (watchlist: WatchListItem[]) => void;
  onUserRouteSet: (userRoutes: any) => void;
}

const HomepageRender: React.FC<Redux> = (props) => {
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [companies, setCompanies] = useState([] as any);
  const [technology, setTechnology] = useState([] as any);
  const [manufacturing, setManufacturing] = useState([] as any);
  const [energy, setEnergy] = useState([] as any);
  const [results, setResults] = useState({} as any);

  const { data: companyData } = useQuery(getStocksQuery);
  const [passToken, { data }] = useLazyQuery(userQuery);
  const [getUser, { data: getUserData }] = useLazyQuery(
    nonTokenModifyUserQuery,
    {
      pollInterval: 500,
    }
  );

  const { status } = useContext(statusContext);

  useEffect(() => {
    if (companyData) {
      let companies = companyData.getStocks;
      setCompanies(companies);
      let sortedCompanies = companySort(companyData.getStocks);
      setTechnology(sortedCompanies.tech);
      setManufacturing(sortedCompanies.manu);
      setEnergy(sortedCompanies.energ);
    }
  }, [companyData]);

  useEffect(() => {
    if (status === false) {
      let sessionToken = sessionStorage.getItem("Token");
      if (sessionToken) {
        passToken({
          variables: {
            token: sessionStorage.getItem("Token"),
          },
        });
      } else browserHist.push("/login");
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
    }
  }, [getUserData]);

  useEffect(() => {
    if (status === false) if (data && data.token) setLoadingInUser(true);
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
    if (postingToFeed === true)
      return (
        <PortfolioValuePostModal
          setPostingToFeed={() => setPostingToFeed(false)}
        />
      );
    else return null;
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
              <Profile />
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
              <UserPosts />
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
            <UserLoginAuthSubresolver loggedIn={loggedIn} />
          </div>
        </div>
      );
    } else if (loadingInUser === false) {
      return <div>{returnLoadingIcon()}</div>;
    }
  }

  return <div>{returnLoading()}</div>;
};

export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageRender);
