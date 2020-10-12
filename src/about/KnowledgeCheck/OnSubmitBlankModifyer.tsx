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

  console.log("correct bool:");
  console.log(correct);
  function returnRender() {
    if (submitted === true) {
      if (isCorrect === true) {
        return (
          <div>
            <CorrectIcon />
          </div>
        );
      } else {
        return (
          <div>
            <IncorrectIcon />
          </div>
        );
      }
    } else return null;
  }

  return <div>{returnRender()}</div>;
};

export default OnSubmitBlankModifyer;
