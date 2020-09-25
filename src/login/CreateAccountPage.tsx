import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import UserNameInput from "./UserNameInput";
import PasswordInput from "./PasswordInput";
import CreateNewUser from "../resolvers/CreateNewUser";

const CreateAccountPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function passUsername(val: string) {
    setUsername(val);
  }

  function passPassword(val: string) {
    setPassword(val);
  }

  return (
    <div>
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
      <CreateNewUser username={username} password={password} />
    </div>
  );
};

export default CreateAccountPage;
