import React, { useEffect, useContext } from "react";
import { useLazyQuery } from "react-apollo";
import { userLoginQuery, userQuery } from "../queries/queries";
import { statusContext, userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { comparePass } from "../login/hashing.js";

interface Props {
  username: string;
  password: string;
}

const QueryUserLogin: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [
    getUser,
    { loading: loadingCheckUser, data: dataCheckUser, error: errorCheckUser },
  ] = useLazyQuery(userLoginQuery);
  const [
    logUserIn,
    { loading: loadingLogIn, data: dataLogIn, error: errorLogIn },
  ] = useLazyQuery(userQuery);

  useEffect(() => {
    getUser({
      variables: {
        username: props.username,
      },
    });
  }, [props.password]);

  function logIn() {
    if (dataCheckUser) {
      if (dataCheckUser.userLogin.hash) {
        let compared = comparePass(
          props.password,
          dataCheckUser.userLogin.hash
        );
        if (compared === true) {
          logUserIn({
            variables: {
              userId: dataCheckUser.userLogin.userId,
            },
          });
        }
      }
    }
  }

  useEffect(() => {
    if (dataLogIn) {
      pushToUser();
    }
  }, [dataLogIn]);

  function pushToUser() {
    console.log(dataLogIn);
    if (dataLogIn) {
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

  return <button onClick={() => logIn()}>Sign In</button>;
};

export default QueryUserLogin;
