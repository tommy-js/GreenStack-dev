import React, { useState } from "react";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import { UserNameInput } from "../UserNameInput/UserNameInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { QueryUserLogin } from "../QueryUserLogin/QueryUserLogin";
import { HiddenVisual } from "../HiddenVisual/HiddenVisual";

interface Props {
  loadingUser: () => void;
  passUserAuth: (id: number) => void;
}

export const SigninPage: React.FC<Props> = (props) => {
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

  function loadingUser() {
    props.loadingUser();
  }

  return (
    <React.Fragment>
      <LoginHeader text="Login" />
      <UserNameInput
        username={username}
        passString={passUsername}
        placeholder="Username"
      />
      <PasswordInput
        password={password}
        passString={passPassword}
        placeholder="Password"
      />
      <QueryUserLogin
        username={username}
        password={password}
        loadingUser={loadingUser}
        renderUsernameNull={renderUsernameNull}
        renderPasswordNull={renderPasswordNull}
        passUserAuth={props.passUserAuth}
      />
      <HiddenVisual text="You must enter a username" opac={usernameOpac} />
      <HiddenVisual text="You must enter a password" opac={passwordOpac} />
    </React.Fragment>
  );
};
