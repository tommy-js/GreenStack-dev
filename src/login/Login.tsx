import React, { useState } from "react";
import SigninPage from "./SigninPage";
import CreateAccountPage from "./CreateAccountPage";
import StandardButton from "../StandardButton";
import RenderAccountLink from "./RenderAccountLink";
import {
  LoginPageFeedInfo,
  LoginPageLearnInfo,
  LoginPageCommunityInfo,
} from "./LoginPageInfo";

const Login: React.FC = () => {
  const [newAccount, setNewAccount] = useState(false);
  const [buttonText, setButtonText] = useState("Log in");

  function triggerNewAccount() {
    if (newAccount === true) {
      setButtonText("Log in");
      setNewAccount(false);
    } else {
      setButtonText("Create a new account");
      setNewAccount(true);
    }
  }

  function displayBlock() {
    if (newAccount === false) {
      return (
        <div>
          <SigninPage />
        </div>
      );
    } else return <CreateAccountPage />;
  }

  return (
    <div id="login_page">
      <div id="centered_login_page">
        <div id="login_forms">
          {displayBlock()}
          <RenderAccountLink
            newAccount={newAccount}
            triggerNewAccount={triggerNewAccount}
          />
        </div>
      </div>
      <div id="login_page_about">
        <h3>What is Stockly?</h3>
        <h4>Join a community of memers, learners, traders, and educators.</h4>
        <LoginPageFeedInfo />
        <LoginPageCommunityInfo />
        <LoginPageLearnInfo />
      </div>
    </div>
  );
};

export default Login;
