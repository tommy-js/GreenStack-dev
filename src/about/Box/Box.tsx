import React, { useState } from "react";

interface Props {
  title: string;
  id: number;
  selected: boolean;
  modSelected: (id: number) => void;
}

const Box: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(props.selected);

  function modSelected() {
    setSelected(!selected);
    props.modSelected(props.id);
  }

  return (
    <div className="select_boxes" onClick={() => modSelected()}>
      <input type="checkbox" checked={selected} className="box_checkbox" />
      <p className="box_title">{props.title}</p>
    </div>
  );
};

export default Box;
