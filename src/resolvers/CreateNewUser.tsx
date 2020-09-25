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

  const passwordEffective = {
    greaterThan8: false,
    lessThan64: false,
    includesSpecial: false,
    includesCapital: false,
    includesNum: false,
  };

  function testedCap(pass: string) {
    let password = pass.toLowerCase();
    let checkPass = pass;
    let bool;
    if (password !== checkPass) {
      bool = true;
    } else if (password === checkPass) {
      bool = false;
    }
    return bool;
  }

  function checkUser(pass: string) {
    let testedSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(
      pass
    );

    if (testedSpecial === true) {
      passwordEffective.includesSpecial = true;
    }
    if (testedCap(pass) === true) {
      passwordEffective.includesCapital = true;
    }

    console.log(passwordEffective);

    return null;
  }

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
          prog1: Math.floor(Math.random() * 10000),
          prog2: Math.floor(Math.random() * 10000),
          prog3: Math.floor(Math.random() * 10000),
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

  return (
    <button onClick={() => checkUser(props.password)}>Create Account</button>
  );
};

export default compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateNewUser);
