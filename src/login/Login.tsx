import React, { useState, useEffect } from "react";
import SigninPage from "./SigninPage";
import CreateAccountPage from "./CreateAccountPage";
import StandardButton from "../StandardButton";
import UserLoginAuthSubresolver from "../resolvers/UserLoginAuthSubresolver";
import LoadingUser from "./LoadingUser";
import RenderAccountLink from "./RenderAccountLink";
import {
  LoginPageFeedInfo,
  LoginPageLearnInfo,
  LoginPageCommunityInfo,
} from "./LoginPageInfo";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [userId, setUserId] = useState(0);
  const [newAccount, setNewAccount] = useState(false);
  const [buttonText, setButtonText] = useState("Log in");
  const [loadingUser, setLoadingUser] = useState(false);

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
        </div>
      );
    }
  }

  return (
    <div id="login_page">
      <div id="centered_login_page">{displayBlock()}</div>
      <UserLoginAuthSubresolver id={userId} />
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
