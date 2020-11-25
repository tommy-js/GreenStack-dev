import React, { useState, useEffect } from "react";
import { returnSelected } from "./index";
import Box from "../Box/Box";

interface Option {
  id: number;
  title: string;
  selected: boolean;
}

interface SelectBoxes {
  options: Option[];
  modAnswer: (argument: any) => void;
}

export const KnowledgeCheckSelectBoxes: React.FC<SelectBoxes> = (props) => {
  const [selected, setSelected] = useState(props.options);

  function modSelected(id: number) {
    let selectedArray = returnSelected(selected, id)!;
    setSelected(selectedArray);
  }

  useEffect(() => {
    props.modAnswer(selected);
    console.log(selected);
  }, [selected]);

  return (
    <div>
      {selected.map((el: Option) => (
        <Box
          key={el.id}
          id={el.id}
          title={el.title}
          selected={el.selected}
          modSelected={modSelected}
        />
      ))}
    </div>
  );
};
