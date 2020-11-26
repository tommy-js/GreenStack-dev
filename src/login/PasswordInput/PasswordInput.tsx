import React from "react";

interface Props {
  passString: (val: string) => void;
  placeholder: string;
  password: string;
}

export const PasswordInput: React.FC<Props> = (props) => {
  function showPassword() {
    let input = document.getElementById("login_access") as HTMLInputElement;
    if (input.type === "password") input.type = "text";
    else input.type = "password";
  }

  return (
    <React.Fragment>
      <input
        id="login_access"
        className="input_container"
        type="password"
        value={props.password}
        placeholder={props.placeholder}
        onChange={(e) => props.passString(e.target.value)}
      />
      <input type="checkbox" onClick={() => showPassword()} />
      <label>Show Password</label>
    </React.Fragment>
  );
};
