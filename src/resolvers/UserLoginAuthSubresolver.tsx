import React, { useState, useEffect, useContext } from "react";
import { userQuery, newTokenMutation } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { statusContext } from "../AppMain/App";
import { hashToken } from "../login/hashing.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

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
}

interface Props extends Redux {
  id: number;
  loggedIn: () => void;
  newTokenMutation: (variables: object) => any;
}

const UserLoginAuthSubresolver: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [
    logUserIn,
    { loading: loadingLogIn, data: dataLogIn, error: errorLogIn },
  ] = useLazyQuery(userQuery);

  useEffect(() => {
    setTimeout(() => {
      logUserIn({
        variables: {
          userId: props.id,
        },
      });
    }, 2000);
  }, [props.id]);

  useEffect(() => {
    if (dataLogIn) {
      pushToUser();
    }
  }, [dataLogIn]);

  function pushToUser() {
    console.log(dataLogIn);
    if (dataLogIn.user) {
      props.onUsernameSet(dataLogIn.user.username);
      props.onUserIDSet(dataLogIn.user.userId);
      props.onWatchlistSet(dataLogIn.user.watchlist);
      props.onMoneySet(dataLogIn.user.money);
      props.onNewAccountSet(dataLogIn.user.newaccount);
      props.onDarkmodeSet(dataLogIn.user.darkmode);
      props.onInvisibleSet(dataLogIn.user.invisible);
      props.onAllowCommentsSet(dataLogIn.user.allowCommentsOnTrades);
      props.onInitialFollowerSet(dataLogIn.user.followers);
      props.onInitialFollowingSet(dataLogIn.user.following);
      props.onStocksSet(dataLogIn.user.stocks);
      props.onInitialPostsSet(dataLogIn.user.posts);
      props.onProfileImageSet(dataLogIn.user.profileImage);
      props.onInitialTradeSet(dataLogIn.user.trades);
      props.onInitialNotificationsSet(dataLogIn.user.notifications);
      props.onInitialCommentsSet(dataLogIn.user.comments);
      props.onInitialProgressSet(dataLogIn.user.progress);

      // props.setUserVal({
      // username: dataLogIn.user.username,
      // userId: dataLogIn.user.userId,
      // money: dataLogIn.user.money,
      // darkmode: dataLogIn.user.darkmode,
      // invisible: dataLogIn.user.invisible,
      // newaccount: dataLogIn.user.newaccount,
      // allowCommentsOnTrades: dataLogIn.user.allowCommentsOnTrades,
      // followers: dataLogIn.user.followers,
      // following: dataLogIn.user.following,
      // stocks: dataLogIn.user.stocks,
      // posts: dataLogIn.user.posts,
      // profileImage: dataLogIn.user.profileImage,
      // trades: dataLogIn.user.trades,
      // watchlist: dataLogIn.user.watchlist,
      // comments: dataLogIn.user.comments,
      // notifications: dataLogIn.user.notifications,
      // progress: dataLogIn.user.progress,
      // });
      let token = hashToken(dataLogIn.user.userId, dataLogIn.user.username);
      sessionStorage.setItem("Token", token);
      // props
      //   .newTokenMutation({
      //     variables: {
      //       userId: dataLogIn.user.userId,
      //       token: token,
      //     },
      //   })
      //   .catch((err: any) => console.log(err))
      //   .then((res: any) => {
      //     props.loggedIn();
      //     setStatus(true);
      //     console.log("New token mutation passed");
      //   });
    }
  }

  return null;
};

export default connect(mapStateToProps)(UserLoginAuthSubresolver);
