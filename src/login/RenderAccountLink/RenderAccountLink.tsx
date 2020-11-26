import React from "react";

interface Props {
  newAccount: boolean;
  triggerNewAccount: () => void;
}

export const RenderAccountLink: React.FC<Props> = (props) => {
  function checkNewAccount() {
    if (props.newAccount === false) {
      return (
        <React.Fragment>
          Want to join the party? Create a new account
          <a href="#" onClick={props.triggerNewAccount}>
            {" "}
            here
          </a>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          Already a member? Login
          <a className="teal_link" href="#" onClick={props.triggerNewAccount}>
            {" "}
            here
          </a>
        </React.Fragment>
      );
    }
  }

  return <React.Fragment>{checkNewAccount()}</React.Fragment>;
};
