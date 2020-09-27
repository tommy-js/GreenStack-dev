import React, { useState, useEffect, useContext } from "react";
import { useLazyQuery } from "react-apollo";
import { userLoginQuery, userQuery } from "../queries/queries";
import { statusContext, userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { comparePass } from "../login/hashing.js";

interface Props {
  username: string;
  password: string;
  renderPasswordNull: () => void;
  renderUsernameNull: () => void;
}

const QueryUserLogin: React.FC<Props> = (props) => {
  const [delay, setDelay] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
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
    setTimeout(() => {
      getUser({
        variables: {
          username: props.username,
        },
      });
      console.log("checked for user at: " + delay);
    }, delay);
  }, [props.password]);

  function checkValid() {
    if (props.username.length > 0 && props.password.length > 0) {
      logIn();
    }
    if (props.username.length === 0) {
      props.renderUsernameNull();
    }
    if (props.password.length === 0) {
      props.renderPasswordNull();
    }
  }

  function logIn() {
    setTimeout(() => {
      if (dataCheckUser) {
        if (dataCheckUser.userLogin) {
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
          } else if (compared === false) {
            let currentIncorrect = incorrectAnswers + 1;
            setDelay(2 ** currentIncorrect * 1000);
            setIncorrectAnswers(currentIncorrect);
            console.log("delay: " + delay);
            console.log("Current incorrect: " + incorrectAnswers);
          }
        }
      }
    }, delay);
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

  return <button onClick={() => checkValid()}>Sign In</button>;
};

export default QueryUserLogin;
