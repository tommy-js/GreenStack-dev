import React, { useState, useEffect } from "react";
import Box from "./Box";

interface Option {
  id: number;
  title: string;
  selected: boolean;
}

interface SelectBoxes {
  options: Array<Option>;
  modAnswer: (argument: any) => void;
}

const KCSelectBoxes: React.FC<SelectBoxes> = (props) => {
  const [selected, setSelected] = useState(props.options);

  function modSelected(id: number) {
    let arr = [...selected];
    let foundArr = arr.find((el: Option) => el.id === id);
    if (foundArr) {
      let ind = arr.indexOf(foundArr);
      let obj = {
        id: id,
        title: arr[ind].title,
        selected: !arr[ind].selected,
      };
      arr[ind] = obj;
      setSelected(arr);
    }
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

export default KCSelectBoxes;
