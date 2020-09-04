import React from "react";

interface Props {
  newAccount: boolean;
  triggerNewAccount: () => void;
}

const RenderAccountLink: React.FC<Props> = (props) => {
  function checkNewAccount() {
    if (props.newAccount === false) {
      return (
        <p>
          Want to join the party? Create a new account
          <a href="#" onClick={props.triggerNewAccount}>
            {" "}
            here
          </a>
        </p>
      );
    } else {
      return (
        <p>
          Already a member? Login
          <a className="teal_link" href="#" onClick={props.triggerNewAccount}>
            {" "}
            here
          </a>
        </p>
      );
    }
  }

  return <div>{checkNewAccount()}</div>;
};

export default RenderAccountLink;
