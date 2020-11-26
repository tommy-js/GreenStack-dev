import React, { useEffect, useContext } from "react";
import { userQuery } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { browserHist } from "../AppMain/history";
import { statusContext } from "../AppMain/App/App";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../actions/actions";

interface Redux {
  onUsernameSet: (username: string) => void;
  onUserIDSet: (userId: string) => void;
  onBioSet: (bio: string) => void;
  onWatchlistSet: (watchlist: any) => void;
  onMoneySet: (money: number) => void;
  onNewAccountSet: (newaccount: boolean) => void;
  onNewPortfolioSet: (newPortfolio: boolean) => void;
  onDarkmodeSet: (darkmode: boolean) => void;
  onInvisibleSet: (invisible: boolean) => void;
  onAllowCommentsSet: (allowCommentsOnPosts: boolean) => void;
  onInitialFollowerSet: (followers: any) => void;
  onInitialFollowingSet: (following: any) => void;
  onStocksSet: (stocks: any) => void;
  onInitialPostsSet: (posts: any) => void;
  onProfileImageSet: (profileImage: any) => void;
  onInitialNotificationsSet: (notifications: any) => void;
  onInitialCommentsSet: (comments: any) => void;
  onInitialProgressSet: (progress: any) => void;
  onInitialProgressElementsSet: (progressElements: any) => void;
  onUserRouteSet: (userRoutes: any) => void;
}

interface Props extends Redux {
  loggedIn: () => void;
}

const UserLoginAuthSubresolver: React.FC<Props> = (props) => {
  const { setStatus } = useContext(statusContext);
  const [
    logUserIn,
    { loading: loadingLogIn, data: dataLogIn, error: errorLogIn },
  ] = useLazyQuery(userQuery);

  useEffect(() => {
    setTimeout(() => {
      let token = sessionStorage.getItem("Token");
      if (token) {
        logUserIn({
          variables: {
            token: token,
          },
        });
      } else browserHist.push("/login");
    }, 500);
  }, []);

  useEffect(() => {
    if (dataLogIn) pushToUser();
  }, [dataLogIn]);

  function getProgEls(user: any) {
    let progElements = [];
    for (let i = 0; i < user.progress.length; i++) {
      for (let j = 0; j < user.progress[i].progressElements.length; j++) {
        progElements.push(user.progress[i].progressElements[j]);
        console.log("progElements");
      }
    }
    return progElements;
  }

  function getProgs(user: any) {
    let prog = [];
    for (let i = 0; i < user.progress.length; i++) {
      let obj = {
        title: user.progress[i].title,
        id: user.progress[i].id,
        percent: user.progress[i].percent,
      };
      prog.push(obj);
    }
    return prog;
  }

  function pushToUser() {
    console.log(dataLogIn);
    if (dataLogIn && dataLogIn.user) {
      let user: any = dataLogIn.user;

      let progs = getProgEls(user);

      let progress = getProgs(user);

      props.onUsernameSet(user.username);
      props.onUserIDSet(user.userId);
      props.onBioSet(user.bio);
      props.onWatchlistSet(user.watchlist);
      props.onMoneySet(user.money);
      props.onNewAccountSet(user.newUser.newLog);
      props.onNewPortfolioSet(user.newUser.newPortfolio);
      props.onDarkmodeSet(user.darkmode);
      props.onInvisibleSet(user.invisible);
      props.onAllowCommentsSet(user.allowCommentsOnPosts);
      props.onInitialFollowerSet(user.followers);
      props.onInitialFollowingSet(user.following);
      props.onStocksSet(user.stocks);
      props.onInitialPostsSet(user.posts);
      props.onProfileImageSet(user.profileImage);
      props.onInitialNotificationsSet(user.notifications);
      props.onInitialCommentsSet(user.comments);
      props.onInitialProgressSet(progress);
      props.onInitialProgressElementsSet(progs);
      props.onUserRouteSet(returnUserRoutes(user));
      sessionStorage.setItem("Token", user.token);
    }
    setStatus(true);
    browserHist.push("/home");
  }

  function returnUserRoutes(user: any) {
    let obj = {
      userId: user.userId,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    };
    let arr = [obj];
    return arr;
  }

  return null;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginAuthSubresolver);
