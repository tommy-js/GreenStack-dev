import React, { useState, useEffect, useContext } from "react";
import { SigninPage } from "../SigninPage/SigninPage";
import { CreateAccountPage } from "../CreateAccountPage/CreateAccountPage";
import UserLoginAuthSubresolver from "../../resolvers/UserLoginAuthSubresolver";
import { LoadingUser } from "../Loading/Loading";
import { RenderAccountLink } from "../RenderAccountLink/RenderAccountLink";
import {
  LoginPageFeedInfo,
  LoginPageLearnInfo,
  LoginPageCommunityInfo,
} from "../LoginPageInfo/LoginPageInfo";
import { Link } from "react-router-dom";
import { statusContext } from "../../AppMain/App/App";
import { queryToken } from "../../queries/queries";
import { useLazyQuery } from "react-apollo";
import { browserHist } from "../../AppMain/history";

export const Login: React.FC = () => {
  const [userId, setUserId] = useState();
  const [newAccount, setNewAccount] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);

  const { status, setStatus } = useContext(statusContext);

  const [passToken, { data }] = useLazyQuery(queryToken);

  useEffect(() => {
    if (status === false) {
      let sessionToken = sessionStorage.getItem("Token");
      if (sessionToken) {
        passToken({
          variables: {
            token: sessionToken,
          },
        });
        setLoadingUser(true);
      }
    }
  }, []);

  useEffect(() => {
    let sessionToken = sessionStorage.getItem("Token");
    if (data && data.token) {
      console.log(data.token);
      if (data.token.token === sessionToken) {
        setStatus(true);
        setUserId(data.token.userid);
        setLoadingUser(true);
      }
    }
  }, data);

  function passUserAuth(id: number) {
    setUserId(id);
  }

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  function triggerNewAccount() {
    if (newAccount === true) setNewAccount(false);
    else setNewAccount(true);
  }

  function modLoadingUser() {
    setLoadingUser(true);
  }

  function loggedIn() {
    browserHist.push("/home");
  }

  function displayBlock() {
    if (loadingUser === false) {
      if (newAccount === false) {
        return (
          <div id="login_forms">
            <SigninPage
              loadingUser={modLoadingUser}
              passUserAuth={passUserAuth}
            />
            <RenderAccountLink
              newAccount={newAccount}
              triggerNewAccount={triggerNewAccount}
            />
          </div>
        );
      } else
        return (
          <CreateAccountPage
            newAccount={newAccount}
            triggerNewAccount={triggerNewAccount}
          />
        );
    } else {
      return (
        <div id="login_forms">
          <LoadingUser />
          <UserLoginAuthSubresolver loggedIn={loggedIn} />
        </div>
      );
    }
  }

  return (
    <div id="login_page">
      <div id="centered_login_page">{displayBlock()}</div>
      <div id="login_page_about">
        <h3>What is Stockly?</h3>
        <h4>Join a community of memers, learners, traders, and educators.</h4>
        <LoginPageFeedInfo />
        <LoginPageCommunityInfo />
        <LoginPageLearnInfo />
        <h3>
          Still have questions? <Link to="/information">Go Here</Link>
        </h3>
      </div>
    </div>
  );
};
