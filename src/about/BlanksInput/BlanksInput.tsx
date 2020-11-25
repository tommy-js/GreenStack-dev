import React, { useState } from "react";

interface Props {
  text: string;
  id: number;
  correctAnswer: string;
  modCorrect: (id: number, isCorrect: boolean) => void;
}

export const BlanksInput: React.FC<Props> = ({
  text,
  id,
  correctAnswer,
  modCorrect,
}) => {
  const [val, setVal] = useState("");

  function modVal(input: string) {
    setVal(input);
    if (input === correctAnswer) modCorrect(id, true);
    else if (input != correctAnswer) modCorrect(id, false);
  }

  return (
    <div className="blank_input_block">
      <p className="blank_question">{text}</p>
      <input
        className="blank_input"
        type="text"
        value={val}
        onChange={(e) => modVal(e.target.value)}
      />
    </div>
  );
};
