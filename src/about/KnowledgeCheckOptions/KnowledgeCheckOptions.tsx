import React, { useState } from "react";
import { Option } from "../Option/Option";

type Option = {
  title: string;
  id: number;
};

interface Props {
  options: Option[];
  modOption: (id: number) => void;
}

export const KnowledgeCheckOptions: React.FC<Props> = (props) => {
  const [selectedOption, setSelectedOption] = useState(0);

  function selectOption(id: number) {
    props.modOption(id);
    setSelectedOption(id);
  }

  return (
    <React.Fragment>
      {props.options.map((el: Option) => (
        <Option
          title={el.title}
          id={el.id}
          key={el.id}
          selectedOption={selectedOption}
          selectOption={selectOption}
        />
      ))}
    </React.Fragment>
  );
};
