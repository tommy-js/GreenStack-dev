import React from "react";

interface Props {
  text: string;
}

const LoginHeader: React.FC<Props> = (props) => {
  return <h3 id="login_header">{props.text}</h3>;
};

export default LoginHeader;
