import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import RenderAccountLink from "./RenderAccountLink";
import UserNameInput from "./UserNameInput";
import PasswordInput from "./PasswordInput";
import PasswordValidation from "./PasswordValidation";
import CreateNewUser from "../resolvers/CreateNewUser";

interface Props {
  newAccount: boolean;
  triggerNewAccount: () => void;
}

const CreateAccountPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passValidation, setPassValidation] = useState({
    char8: false,
    char64: false,
    charSpecial: false,
    charCapital: false,
    charNum: false,
  });

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
    <div>
      <div id="login_forms">
        <LoginHeader text="Create Account" />
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
        <CreateNewUser
          username={username}
          password={password}
          passObjectUp={setObject}
        />
        <RenderAccountLink
          newAccount={props.newAccount}
          triggerNewAccount={props.triggerNewAccount}
        />
      </div>
      <PasswordValidation {...passValidation} password={password} />
    </div>
  );
};

export default CreateAccountPage;
