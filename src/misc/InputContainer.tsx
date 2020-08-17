import React, { useState } from "react";

interface Props {
  placeholder: string;
  passString: (val: string) => void;
}

const InputContainer: React.FC<Props> = (props) => {
  const [input, setInput] = useState("");

  function passUp(val: string) {
    setInput(val);
    props.passString(val);
  }

  return (
    <input
      placeholder={props.placeholder}
      onChange={(e) => passUp(e.target.value)}
    />
  );
};

export default InputContainer;
