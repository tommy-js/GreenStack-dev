import React, { useState } from "react";
import SigninPage from "../SigninPage";
import CreateAccountPage from "./CreateAccountPage";
import StandardButton from "../StandardButton";
import RenderAccountLink from "./RenderAccountLink";

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
    <div id="centered_login_page">
      {displayBlock()}
      <RenderAccountLink
        newAccount={newAccount}
        triggerNewAccount={triggerNewAccount}
      />
    </div>
  );
};

export default Login;
