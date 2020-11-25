import React, { useState, useEffect } from "react";
import { BlanksInput } from "../BlanksInput/BlanksInput";
import { OnSubmitBlankModifyer } from "../OnSubmitBlankModifyer/OnSubmitBlankModifyer";
import { returnCorrectReducer } from "./index";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserProgressMutation } from "../../queries/queries.js";

interface Props {
  title: string;
  id: string;
  specId: string;
  options: {
    text: string;
    correctAnswer: string;
    value: number;
    id: number;
  }[];
  updateUserProgressMutation: (variables: object) => any;
}

const BlanksMutation: React.FC<Props> = (props) => {
  const [correct, setCorrect] = useState([] as any);
  const [submitted, setSubmitted] = useState(false);
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    let obj;
    let arr = [];
    for (let i = 0; i < props.options.length; i++) {
      obj = {
        id: props.options[i].id,
        correct: false,
      };
      arr.push(obj);
    }
    setCorrect(arr);
  }, []);

  function modCorrect(id: number, isCorrect: boolean) {
    let returnedObj = returnCorrectReducer(
      correct,
      props.options,
      id,
      isCorrect
    );
    setCorrect(returnedObj.correct);
    setIncrement(returnedObj.reducer);
  }

  function submit() {
    props
      .updateUserProgressMutation({
        variables: {
          id: props.id,
          specId: props.specId,
          increment: increment,
        },
      })
      .then((res: any) => {
        setSubmitted(true);
        console.log(res);
      })
      .catch((err: any) => console.log(err));
  }

  return (
    <div id="knowledge_check">
      <h3 className="blanks_title">{props.title}</h3>
      {props.options.map((el: any) => (
        <div>
          <BlanksInput
            text={el.text}
            id={el.id}
            correctAnswer={el.correctAnswer}
            modCorrect={modCorrect}
          />
          <OnSubmitBlankModifyer
            submitted={submitted}
            id={el.id}
            correct={correct}
          />
        </div>
      ))}
      <button className="blank_submit" onClick={() => submit()}>
        Submit
      </button>
    </div>
  );
};

export const Blanks = compose(
  graphql(updateUserProgressMutation, { name: "updateUserProgressMutation" })
)(BlanksMutation);
