import React, { useState, useContext, useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { createUserMutation, distinctUserQuery } from "../queries/queries.js";
import { browserHist } from "../AppMain/history.js";
import { statusContext, userContext } from "../AppMain/App";
import { hashPass, hashToken } from "../login/hashing.js";

interface Props {
  username: string;
  password: string;
  passObjectUp: (passwordEffective: any) => void;
  createUserMutation: (variables: object) => any;
  alreadyExists: (val: boolean) => void;
}

const CreateNewUser: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
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
        props.alreadyExists(true);
      } else {
        setNewUsername(true);
        props.alreadyExists(false);
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
    let token = hashToken(props.username);
    sessionStorage.setItem("Token", token);
    props
      .createUserMutation({
        variables: {
          username: props.username,
          token: token,
          hash: calcHash.hash,
          salt: calcHash.salt,
        },
      })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return <button onClick={() => checkValidity()}>Create Account</button>;
};

export default compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateNewUser);
