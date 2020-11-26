import React, { useState, useEffect } from "react";

interface Props {
  char8: boolean;
  char64: boolean;
  charSpecial: boolean;
  charCapital: boolean;
  charNum: boolean;
  password: string;
}

export const PasswordValidation: React.FC<Props> = (props) => {
  const [opac, setOpac] = useState(0);

  useEffect(() => {
    if (props.password.length > 0) setOpac(1);
    else if (props.password.length === 0) setOpac(0);
  }, [props.password]);

  return (
    <div id="password_validation" style={{ opacity: opac }}>
      <div className="password_validation_checkbox">
        <input type="checkbox" checked={props.char8} />
        <label>Longer than 8 characters</label>
      </div>
      <div className="password_validation_checkbox">
        <input type="checkbox" checked={props.charSpecial} />
        <label>Includes at least 1 special character</label>
      </div>
      <div className="password_validation_checkbox">
        <input type="checkbox" checked={props.charCapital} />
        <label>Includes at least 1 capital letter</label>
      </div>
      <div className="password_validation_checkbox">
        <input type="checkbox" checked={props.charNum} />
        <label>Includes at least 1 number</label>
      </div>
    </div>
  );
};
