import React from "react";

interface Props {
  question: string;
  index: number;
  selected: number;
  options: {
    option: string;
  }[];
  modSelected: (id: number, index: number) => void;
}

export const UserQuestion: React.FC<Props> = (props) => {
  function changeSelected(e: any) {
    props.modSelected(e, props.index);
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
