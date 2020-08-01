import React from "react";

interface Props {
  data: string[];
}

const LearnPage: React.FC<Props> = (props) => {
  return (
    <div id="centering_container">
      {props.data.map((el) => (
        <p>{el}</p>
      ))}
    </div>
  );
};

export default LearnPage;
