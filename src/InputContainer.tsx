import React from "react";

interface Props {
  placeholder: string;
}

const InputContainer: React.FC<Props> = (props) => {
  return <input placeholder={props.placeholder} />;
};

export default InputContainer;
