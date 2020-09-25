import React from "react";

interface Props {
  char8: boolean;
  char64: boolean;
  charSpecial: boolean;
  charCapital: boolean;
  charNum: boolean;
}

const PasswordValidation: React.FC<Props> = (props) => {
  return (
    <div>
      <input type="checkbox" checked={props.char8} />
      <label>Longer than 8 characters</label>
    </div>
  );
};

export default PasswordValidation;
