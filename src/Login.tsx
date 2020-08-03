import React, { useState } from "react";
import SigninPage from "./SigninPage";
import CreateAccountPage from "./CreateAccountPage";
import StandardButton from "./StandardButton";

const Login: React.FC = () => {
  const [newAccount, setNewAccount] = useState(false);
  const [buttonText, setButtonText] = useState("Log in");

  function buttonPress() {
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
      return <SigninPage />;
    } else return <CreateAccountPage />;
  }

  return (
    <div>
      {displayBlock()}
      <StandardButton passFunction={buttonPress} text={buttonText} />
    </div>
  );
};

export default Login;
