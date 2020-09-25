import React, { useState, useContext, useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { createUserMutation, distinctUserQuery } from "../queries/queries.js";
import { browserHist } from "../AppMain/history.js";
import { statusContext } from "../AppMain/App";

interface Props {
  username: string;
  password: string;
  passObjectUp: (passwordEffective: any) => void;
  createUserMutation: (variables: object) => any;
}

const CreateNewUser: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [acceptable, setAcceptable] = useState(false);
  const [newUsername, setNewUsername] = useState(false);
  const [callUser, { loading, data }] = useLazyQuery(distinctUserQuery, {
    variables: { username: props.username },
  });

  const passwordEffective = {
    greaterThan8: false,
    lessThan64: false,
    includesSpecial: false,
    includesCapital: false,
    includesNum: false,
  };

  useEffect(() => {
    if (acceptable === true && newUsername === true) {
      submitButton();
    }
  }, [acceptable]);

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

  function checkTruth(obj: any) {
    for (let i in obj) {
      if (!obj[i]) return false;
    }
    return true;
  }

  useEffect(() => {
    console.log(newUsername);
    let pass = props.password;
    callUser();

    let testedSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(
      pass
    );

    if (pass.length >= 8) {
      passwordEffective.greaterThan8 = true;
    }
    if (pass.length <= 64) {
      passwordEffective.lessThan64 = true;
    }

    let testedNum = /[0-9]/g.test(pass);

    passwordEffective.includesSpecial = testedSpecial;
    passwordEffective.includesNum = testedNum;
    passwordEffective.includesCapital = testedCap(pass);

    console.log(passwordEffective);
    props.passObjectUp(passwordEffective);

    setAcceptable(checkTruth(passwordEffective));
  }, [props.password]);

  // function checkUser(pass: string) {
  // console.log(newUsername);
  // callUser();
  //
  // let testedSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(
  //   pass
  // );
  //
  // if (pass.length >= 8) {
  //   passwordEffective.greaterThan8 = true;
  // }
  // if (pass.length <= 64) {
  //   passwordEffective.lessThan64 = true;
  // }
  //
  // let testedNum = /[0-9]/g.test(pass);
  //
  // passwordEffective.includesSpecial = testedSpecial;
  // passwordEffective.includesNum = testedNum;
  // passwordEffective.includesCapital = testedCap(pass);
  //
  // setAcceptable(checkTruth(passwordEffective));

  //   return null;
  // }

  function submitButton() {
    // let userId = Math.floor(Math.random() * 1000000);
    // let id = Math.floor(Math.random() * 1000000);
    // let date = new Date();
    // let currentTime = Math.floor(date.getTime() / 1000);
    // let notif = "Welcome to TIKR! Make your first trade...";
    // props
    //   .createUserMutation({
    //     variables: {
    //       userId: userId,
    //       username: props.username,
    //       password: props.password,
    //       money: 1000,
    //       darkmode: false,
    //       invisible: false,
    //       allowCommentsOnTrades: true,
    //       timestamp: currentTime,
    //       id: id,
    //       viewed: false,
    //       content: notif,
    //       prog1: Math.floor(Math.random() * 10000),
    //       prog2: Math.floor(Math.random() * 10000),
    //       prog3: Math.floor(Math.random() * 10000),
    //     },
    //   })
    //   .then((res: string) => {
    //     console.log("success");
    //     setStatus(true);
    //     browserHist.push("/");
    //   })
    //   .catch((res: string) => {
    //     console.log("error");
    //   });
  }

  return <button onClick={() => submitButton()}>Create Account</button>;
};

export default compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateNewUser);
