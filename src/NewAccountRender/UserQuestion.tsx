import React from "react";

interface Props {
  question: string;
  options: {
    option: string;
  }[];
}

const UserQuestion: React.FC<Props> = (props) => {
  return (
    <div>
      <h2 className="user_question_header">{props.question}</h2>
      <select>
        {props.options.map((el: any) => (
          <option>{el.option}</option>
        ))}
      </select>
    </div>
  );
};

export default UserQuestion;
