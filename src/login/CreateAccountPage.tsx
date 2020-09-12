import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import InputContainer from "../misc/InputContainer";
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
      <InputContainer passString={passUsername} placeholder="Username" />
      <InputContainer passString={passPassword} placeholder="Password" />
      <CreateNewUser username={username} password={password} />
    </div>
  );
};

export default CreateAccountPage;
