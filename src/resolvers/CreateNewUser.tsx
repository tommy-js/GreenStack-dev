import React, { useContext } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { createUserMutation } from "../queries/queries.js";
import { browserHist } from "../AppMain/history.js";
import { statusContext } from "../AppMain/App";

interface Props {
  username: string;
  password: string;
  createUserMutation: (variables: object) => any;
}

const CreateNewUser: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);

  function submitButton() {
    let userId = Math.floor(Math.random() * 1000000);
    let id = Math.floor(Math.random() * 1000000);
    let date = new Date();
    let currentTime = Math.floor(date.getTime() / 1000);
    let notif = "Welcome to TIKR! Make your first trade...";
    props
      .createUserMutation({
        variables: {
          userId: userId,
          username: props.username,
          password: props.password,
          money: 1000,
          darkmode: false,
          invisible: false,
          allowCommentsOnTrades: true,
          timestamp: currentTime,
          id: id,
          viewed: false,
          content: notif,
        },
      })
      .then((res: string) => {
        console.log("success");
        setStatus(true);
        browserHist.push("/");
      })
      .catch((res: string) => {
        console.log("error");
      });
  }

  return <button onClick={() => submitButton()}>Create Account</button>;
};

export default compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateNewUser);
