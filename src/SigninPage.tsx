import React, { useState } from "react";
import Header from "./Header";
import InputContainer from "./misc/InputContainer";
import StandardButton from "./StandardButton";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { createUserMutation } from "./queries/queries.js";

const SigninPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitButton() {
    // CREATE ACCOUNT AND PASS TO MONGO
    let userId = Math.floor(Math.random() * 1000000);
  }

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
      <StandardButton passFunction={submitButton} text="Sign In" />
    </div>
  );
};

export default SigninPage;
