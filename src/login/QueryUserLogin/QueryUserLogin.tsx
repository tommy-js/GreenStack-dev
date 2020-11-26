import React, { useState, useEffect } from "react";
import { useLazyQuery } from "react-apollo";
import { userLoginQuery } from "../../queries/queries";
import { comparePass } from "./index";

interface Props {
  username: string;
  password: string;
  loadingUser: () => void;
  renderPasswordNull: () => void;
  renderUsernameNull: () => void;
  passUserAuth: (id: number) => void;
}

export const QueryUserLogin: React.FC<Props> = (props) => {
  const [delay, setDelay] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [
    getUser,
    { loading: loadingCheckUser, data: dataCheckUser, error: errorCheckUser },
  ] = useLazyQuery(userLoginQuery);

  useEffect(() => {
    setTimeout(() => {
      getUser({
        variables: {
          username: props.username,
        },
      });
    }, delay);
  }, [props.password]);

  function checkValid() {
    if (props.username.length > 0 && props.password.length > 0) logIn();
    if (props.username.length === 0) props.renderUsernameNull();
    if (props.password.length === 0) props.renderPasswordNull();
  }

  function logIn() {
    setTimeout(() => {
      if (dataCheckUser) {
        if (dataCheckUser.userLogin) {
          let compared = comparePass(
            props.password,
            dataCheckUser.userLogin.hash
          );
          if (compared === true) {
            props.passUserAuth(dataCheckUser.userLogin.userId);
            props.loadingUser();
          } else if (compared === false) {
            let currentIncorrect = incorrectAnswers + 1;
            setDelay(2 ** currentIncorrect * 1000);
            setIncorrectAnswers(currentIncorrect);
            console.log("delay: " + delay);
            console.log("Current incorrect: " + incorrectAnswers);
          }
        }
      }
    }, delay);
  }

  return <button onClick={() => checkValid()}>Sign In</button>;
};
