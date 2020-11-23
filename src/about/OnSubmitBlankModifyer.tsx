import React, { useState, useEffect } from "react";
import { CorrectIcon, IncorrectIcon } from "./Icons";

interface Props {
  submitted: boolean;
  id: number;
  correct: any;
}

const OnSubmitBlankModifyer: React.FC<Props> = ({ submitted, id, correct }) => {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    let foundArr = correct.find((el: any) => el.id === id);
    if (foundArr) {
      let ind = correct.indexOf(foundArr);
      setIsCorrect(correct[ind].correct);
    }
  }, [correct]);

  function returnRender() {
    if (submitted === true) {
      if (isCorrect === true) {
        return <CorrectIcon />;
      } else {
        return <IncorrectIcon />;
      }
    } else return null;
  }

  return <div className="inline">{returnRender()}</div>;
};

export default OnSubmitBlankModifyer;
