import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import InputContainer from "../misc/InputContainer";
import QueryUserLogin from "../resolvers/QueryUserLogin";
import HiddenVisual from "./HiddenVisual";

const SigninPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameOpac, setUsernameOpac] = useState(0);
  const [passwordOpac, setPasswordOpac] = useState(0);

  function passUsername(val: string) {
    setUsername(val);
  }

  function passPassword(val: string) {
    setPassword(val);
  }

  function renderPasswordNull() {
    setPasswordOpac(1);
  }

  function renderUsernameNull() {
    setUsernameOpac(1);
  }

  return (
    <div>
      <LoginHeader text="Login" />
      <InputContainer passString={passUsername} placeholder="Username" />
      <HiddenVisual text="You must enter a username" opac={usernameOpac} />
      <HiddenVisual text="You must enter a password" opac={passwordOpac} />
      <InputContainer passString={passPassword} placeholder="Password" />
      <QueryUserLogin
        username={username}
        password={password}
        renderUsernameNull={renderUsernameNull}
        renderPasswordNull={renderPasswordNull}
      />
    </div>
  );
};

export default SigninPage;
