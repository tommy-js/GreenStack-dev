import React, { useState, useEffect } from "react";

interface Props {
  question: string;
  index: number;
  selected: number;
  options: {
    option: string;
  }[];
  modSelected: (id: number, index: number) => void;
}

const UserQuestion: React.FC<Props> = (props) => {
  const [val, setVal] = useState("");

  function changeSelected(e: any) {
    setVal(e);
    props.modSelected(e, props.index);
    console.log(e);
  }

  return (
    <div>
      <h2 className="user_question_header">{props.question}</h2>
      <select onChange={(e) => changeSelected(e.target.selectedIndex)}>
        {props.options.map((el: any) => (
          <option value={el.option}>{el.option}</option>
        ))}
      </select>
    </div>
  );
};

export default UserQuestion;
