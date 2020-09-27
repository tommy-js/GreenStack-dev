import React, { useState, useEffect, useContext } from "react";
import { userQuery } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { browserHist } from "../AppMain/history";
import { statusContext, userContext } from "../AppMain/App";

interface Props {
  id: number;
}

const UserLoginAuthSubresolver: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [
    logUserIn,
    { called, loading: loadingLogIn, data: dataLogIn, error: errorLogIn },
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
        profileImage: dataLogIn.user.profileImage,
        trades: dataLogIn.user.trades,
        watchlist: dataLogIn.user.watchlist,
        comments: dataLogIn.user.comments,
        notifications: dataLogIn.user.notifications,
        referenceTrades: dataLogIn.user.referenceTrades,
        progress: dataLogIn.user.progress,
      });
      setStatus(true);
      browserHist.push("/home");
    }
  }

  return null;
};

export default UserLoginAuthSubresolver;
