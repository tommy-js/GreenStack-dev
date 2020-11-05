import React, { useState, useEffect, useContext } from "react";
import SigninPage from "./SigninPage";
import CreateAccountPage from "./CreateAccountPage";
import UserLoginAuthSubresolver from "../resolvers/UserLoginAuthSubresolver";
import { LoadingUser } from "./LoadingUser";
import RenderAccountLink from "./RenderAccountLink";
import {
  LoginPageFeedInfo,
  LoginPageLearnInfo,
  LoginPageCommunityInfo,
} from "./LoginPageInfo";
import { Link } from "react-router-dom";
import { statusContext } from "../AppMain/App";
import { queryToken } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { browserHist } from "../AppMain/history";

const Login: React.FC = () => {
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [newAccount, setNewAccount] = useState(false);
  const [buttonText, setButtonText] = useState("Log in");
  const [loadingUser, setLoadingUser] = useState(false);

  const { status, setStatus } = useContext(statusContext);

  const [passToken, { data, loading }] = useLazyQuery(queryToken);

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
        setToken(data.token.token);
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
    if (newAccount === true) {
      setButtonText("Log in");
      setNewAccount(false);
    } else {
      setButtonText("Create a new account");
      setNewAccount(true);
    }
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
          <div>
            <CreateAccountPage
              newAccount={newAccount}
              triggerNewAccount={triggerNewAccount}
            />
          </div>
        );
    } else {
      return (
        <div id="login_forms">
          <LoadingUser />
          <UserLoginAuthSubresolver token={token} loggedIn={loggedIn} />
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

export default Login;
