import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { createUserMutation } from "../queries/queries.js";

interface Props {
  username: string;
  password: string;
  createUserMutation: (variables: object) => void;
}

const CreateNewUser: React.FC<Props> = (props) => {
  function submitButton() {
    let userId = Math.floor(Math.random() * 1000000);
    props.createUserMutation({
      variables: {
        userId: userId,
        username: props.username,
        password: props.password,
        money: 1000,
      },
    });
  }

  return <button onClick={() => submitButton()}>Create Account</button>;
};

export default compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateNewUser);
