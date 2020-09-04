import React, { useContext } from "react";
import { useLazyQuery } from "react-apollo";
import { userLoginQuery } from "../queries/queries";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  username: string;
  password: string;
}

const QueryUserLogin: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [queryUser, { loading, data }] = useLazyQuery(userLoginQuery, {
    variables: { username: props.username },
  });

  function logIn() {
    queryUser();
    setStatus(true);
    browserHist.push("/");
  }

  return <button onClick={() => logIn()}>Sign In</button>;
};

export default QueryUserLogin;
