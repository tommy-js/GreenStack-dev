import React, { useState, useContext, useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { createUserMutation, distinctUserQuery } from "../queries/queries.js";
import { browserHist } from "../AppMain/history.js";
import { statusContext } from "../AppMain/App";
import { hashPass } from "../login/hashing.js";

interface Props {
  username: string;
  password: string;
  passObjectUp: (passwordEffective: any) => void;
  createUserMutation: (variables: object) => any;
}

const CreateNewUser: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [newUsername, setNewUsername] = useState(false);
  const [callUser, { loading, data }] = useLazyQuery(distinctUserQuery, {
    variables: { username: props.username },
  });

  const [passwordEffective, setPasswordEffective] = useState({
    greaterThan8: false,
    lessThan64: false,
    includesSpecial: false,
    includesCapital: false,
    includesNum: false,
  });

  function checkValidity() {
    let checkBool = checkTruth(passwordEffective);
    console.log(passwordEffective);
    console.log("new username: " + newUsername + " checkBool: " + checkBool);
    if (newUsername === true && checkBool === true) {
      submitButton();
    }
  }

  function checkTruth(obj: any) {
    for (let i in obj) {
      if (!obj[i]) return false;
    }
    return true;
  }

  // Checks for username in the database
  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.specUser) {
        setNewUsername(false);
      } else {
        setNewUsername(true);
      }
    }
  }, [data]);

  // Checks for capitalization in the provided password
  function testedCap(pass: string) {
    let password = pass.toLowerCase();
    let checkPass = pass;
    let bool = false;
    if (password !== checkPass) {
      bool = true;
    }
    return bool;
  }

  useEffect(() => {
    console.log(newUsername);
    callUser();

    let testedSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(
      props.password
    );

    function under64() {
      if (props.password.length <= 64) {
        return true;
      } else {
        return false;
      }
    }

    function greater8() {
      if (props.password.length >= 8) {
        return true;
      } else {
        return false;
      }
    }

    let test64 = under64();
    let test8 = greater8();

    let testedNum = /[0-9]/g.test(props.password);
    let testedCapital = testedCap(props.password);

    setPasswordEffective({
      greaterThan8: test8,
      lessThan64: test64,
      includesCapital: testedCapital,
      includesSpecial: testedSpecial,
      includesNum: testedNum,
    });

    // console.log(passwordEffective);
    props.passObjectUp(passwordEffective);
  }, [props.password]);

  function submitButton() {
    let calcHash = hashPass(props.password);
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
          hash: calcHash.hash,
          salt: calcHash.salt,
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

  return <button onClick={() => checkValidity()}>Create Account</button>;
};

export default compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateNewUser);
