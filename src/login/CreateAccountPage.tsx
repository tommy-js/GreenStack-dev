import React, { useState } from "react";
import Header from "../Header";
import InputContainer from "../misc/InputContainer";
import StandardButton from "../StandardButton";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { createUserMutation } from "../queries/queries.js";

interface Props {
  createUserMutation: (variables: object) => void;
}

const CreateAccountPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitButton() {
    // CREATE ACCOUNT AND PASS TO MONGO
    let userId = Math.floor(Math.random() * 1000000);
    props.createUserMutation({
      variables: {
        userId: userId,
        username: username,
        password: password,
        money: 1000,
      },
    });
  }

  function passUsername(val: string) {
    setUsername(val);
  }

  function passPassword(val: string) {
    setPassword(val);
  }

  return (
    <div>
      <Header text="Create Account" />
      <InputContainer passString={passUsername} placeholder="Username" />
      <InputContainer passString={passPassword} placeholder="Password" />
      <StandardButton passFunction={submitButton} text="Create" />
    </div>
  );
};

export default compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateAccountPage);
