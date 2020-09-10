import React, { useState } from "react";
import Option from "./Option";

interface Props {
  options: {
    title: string;
    id: number;
  }[];
  modOption: (id: number) => void;
}

const KCOptions: React.FC<Props> = (props) => {
  const [selectedOption, setSelectedOption] = useState(0);

  function selectOption(id: number) {
    props.modOption(id);
    setSelectedOption(id);
  }

  return (
    <div>
      {props.options.map((el: any) => (
        <Option
          title={el.title}
          id={el.id}
          key={el.id}
          selectedOption={selectedOption}
          selectOption={selectOption}
        />
      ))}
    </div>
  );
};

export default KCOptions;
