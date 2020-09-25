import React from "react";

interface Props {
  passString: (val: string) => void;
  placeholder: string;
  password: string;
}

const PasswordInput: React.FC<Props> = (props) => {
  return (
    <input
      className="input_container"
      type="text"
      value={props.password}
      placeholder={props.placeholder}
      onChange={(e) => props.passString(e.target.value)}
    />
  );
};

export default PasswordInput;
