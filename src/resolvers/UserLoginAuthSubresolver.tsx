import React, { useState, useEffect, useContext } from "react";
import { userQuery, newTokenMutation } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { statusContext, userContext } from "../AppMain/App";
import { hashToken } from "../login/hashing.js";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";

interface Props {
  id: number;
  loggedIn: () => void;
  newTokenMutation: (variables: object) => any;
}

const UserLoginAuthSubresolver: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
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
      setUserVal({
        username: dataLogIn.user.username,
        userId: dataLogIn.user.userId,
        money: dataLogIn.user.money,
        membership: dataLogIn.user.membership,
        darkmode: dataLogIn.user.darkmode,
        invisible: dataLogIn.user.invisible,
        newaccount: dataLogIn.user.newaccount,
        allowCommentsOnTrades: dataLogIn.user.allowCommentsOnTrades,
        followers: dataLogIn.user.followers,
        following: dataLogIn.user.following,
        stocks: dataLogIn.user.stocks,
        profileImage: dataLogIn.user.profileImage,
        trades: dataLogIn.user.trades,
        watchlist: dataLogIn.user.watchlist,
        comments: dataLogIn.user.comments,
        notifications: dataLogIn.user.notifications,
        referenceTrades: dataLogIn.user.referenceTrades,
        progress: dataLogIn.user.progress,
      });
      let token = hashToken(dataLogIn.user.userId, dataLogIn.user.username);
      sessionStorage.setItem("Token", token);
      props
        .newTokenMutation({
          variables: {
            userId: dataLogIn.user.userId,
            token: token,
          },
        })
        .catch((err: any) => console.log(err))
        .then((res: any) => {
          props.loggedIn();
          setStatus(true);
          console.log("New token mutation passed");
        });
    }
  }

  return null;
};

export default compose(graphql(newTokenMutation, { name: "newTokenMutation" }))(
  UserLoginAuthSubresolver
);
