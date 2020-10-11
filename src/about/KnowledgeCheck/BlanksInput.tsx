import React, { useEffect, useState } from "react";

interface Props {
  text: string;
  id: number;
  correctAnswer: string;
  modCorrect: (id: number, isCorrect: boolean) => void;
}

const BlanksInput: React.FC<Props> = ({
  text,
  id,
  correctAnswer,
  modCorrect,
}) => {
  const [val, setVal] = useState("");

  function modVal(input: string) {
    setVal(input);
    if (input === correctAnswer) {
      modCorrect(id, true);
    } else if (input != correctAnswer) {
      modCorrect(id, false);
    }
  }

  return (
    <div>
      <p>{text}</p>
      <input type="text" value={val} onChange={(e) => modVal(e.target.value)} />
    </div>
  );
};

export default BlanksInput;
