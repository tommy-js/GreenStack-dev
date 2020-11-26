import React, { useState } from "react";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import { RenderAccountLink } from "../RenderAccountLink/RenderAccountLink";
import { UserNameInput } from "../UserNameInput/UserNameInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { PasswordValidation } from "../PasswordValidation/PasswordValidation";
import { CreateNewUser } from "../CreateNewUser/CreateNewUser";
import { UserAlreadyExists } from "../UserAlreadyExists/UserAlreadyExists";

interface Props {
  newAccount: boolean;
  triggerNewAccount: () => void;
}

export const CreateAccountPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameAlreadyExists, setUsernameAlreadyExists] = useState(false);

  const [passValidation, setPassValidation] = useState({
    char8: false,
    char64: false,
    charSpecial: false,
    charCapital: false,
    charNum: false,
  });

  function alreadyExists(prop: boolean) {
    if (prop === true) {
      setUsernameAlreadyExists(true);
    } else {
      setUsernameAlreadyExists(false);
    }
  }

  function passUsername(val: string) {
    setUsername(val);
  }

  function passPassword(val: string) {
    setPassword(val);
  }

  function setObject(obj: any) {
    console.log(obj);
    setPassValidation({
      char8: obj.greaterThan8,
      char64: obj.lessThan64,
      charSpecial: obj.includesSpecial,
      charCapital: obj.includesCapital,
      charNum: obj.includesNum,
    });
  }

  return (
    <React.Fragment>
      <div id="login_forms">
        <LoginHeader text="Create Account" />
        <UserNameInput
          username={username}
          passString={passUsername}
          placeholder="Username"
        />
        <UserAlreadyExists visible={usernameAlreadyExists} />
        <PasswordInput
          password={password}
          passString={passPassword}
          placeholder="Password"
        />
        <CreateNewUser
          username={username}
          password={password}
          passObjectUp={setObject}
          alreadyExists={alreadyExists}
        />
        <RenderAccountLink
          newAccount={props.newAccount}
          triggerNewAccount={props.triggerNewAccount}
        />
      </div>
      <PasswordValidation {...passValidation} password={password} />
    </React.Fragment>
  );
};
