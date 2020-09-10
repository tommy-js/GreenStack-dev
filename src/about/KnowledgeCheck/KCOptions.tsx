import React from "react";
import Option from "./Option";

interface Props {
  options: {
    title: string;
    id: number;
  }[];
  modOption: (id: number) => void;
}

const KCOptions: React.FC<Props> = (props) => {
  function selectOption(id: number) {
    props.modOption(id);
  }

  return (
    <div>
      {props.options.map((el: any) => (
        <Option
          title={el.title}
          id={el.id}
          key={el.id}
          selectOption={selectOption}
        />
      ))}
    </div>
  );
};

export default KCOptions;
