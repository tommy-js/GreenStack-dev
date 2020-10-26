import React, { useState, useEffect, useContext } from "react";
import { userQuery } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { browserHist } from "../AppMain/history";
import { statusContext } from "../AppMain/App";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../actions/actions";

interface Redux {
  onUsernameSet: (username: string) => void;
  onUserIDSet: (userId: string) => void;
  onWatchlistSet: (watchlist: any) => void;
  onMoneySet: (money: number) => void;
  onNewAccountSet: (newaccount: boolean) => void;
  onDarkmodeSet: (darkmode: boolean) => void;
  onInvisibleSet: (invisible: boolean) => void;
  onAllowCommentsSet: (allowCommentsOnTrades: boolean) => void;
  onInitialFollowerSet: (followers: any) => void;
  onInitialFollowingSet: (following: any) => void;
  onStocksSet: (stocks: any) => void;
  onInitialPostsSet: (posts: any) => void;
  onProfileImageSet: (profileImage: any) => void;
  onInitialTradeSet: (trades: any) => void;
  onInitialNotificationsSet: (notifications: any) => void;
  onInitialCommentsSet: (comments: any) => void;
  onInitialProgressSet: (progress: any) => void;
  onInitialProgressElementsSet: (progressElements: any) => void;
}

interface Props extends Redux {
  id: string;
  username: string;
  loggedIn: () => void;
}

const UserLoginAuthSubresolver: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [progEl, setProgEl] = useState([]);
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
            userId: props.id,
            token: token,
          },
        });
      } else {
        browserHist.push("/login");
      }
    }, 2000);
  }, [props.id]);

  useEffect(() => {
    if (dataLogIn) {
      pushToUser();
    }
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
      props.onWatchlistSet(user.watchlist);
      props.onMoneySet(user.money);
      props.onNewAccountSet(user.newaccount);
      props.onDarkmodeSet(user.darkmode);
      props.onInvisibleSet(user.invisible);
      props.onAllowCommentsSet(user.allowCommentsOnTrades);
      props.onInitialFollowerSet(user.followers);
      props.onInitialFollowingSet(user.following);
      props.onStocksSet(user.stocks);
      props.onInitialPostsSet(user.posts);
      props.onProfileImageSet(user.profileImage);
      props.onInitialTradeSet(user.trades);
      props.onInitialNotificationsSet(user.notifications);
      props.onInitialCommentsSet(user.comments);
      props.onInitialProgressSet(progress);
      props.onInitialProgressElementsSet(progs);
    }
    setStatus(true);
    browserHist.push("/home");
  }

  return null;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginAuthSubresolver);
