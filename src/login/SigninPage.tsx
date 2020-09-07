import React, { useState } from "react";
import Header from "../Header";
import InputContainer from "../misc/InputContainer";
import QueryUserLogin from "../resolvers/QueryUserLogin";

const SigninPage: React.FC = () => {
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
      <Header text="Login" />
      <InputContainer passString={passUsername} placeholder="Username" />
      <InputContainer passString={passPassword} placeholder="Password" />
      <QueryUserLogin username={username} password={password} />
    </div>
  );
};

export default SigninPage;
