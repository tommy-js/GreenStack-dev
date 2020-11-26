import React, { useState, useEffect } from "react";

interface Props {
  name: string;
  text: string;
  classification: string;
  selected: boolean;
  index: number;
  modIndex: (index: number) => void;
}

export const Check: React.FC<Props> = (props) => {
  const [selectedBcc, setSelectedBcc] = useState("transparent");

  useEffect(() => {
    if (props.selected === true) setSelectedBcc("teal");
    else setSelectedBcc("transparent");
  }, [props.selected]);

  function selectedItem() {
    props.modIndex(props.index);
  }

  return (
    <div
      key={props.index}
      className="user_init_check"
      onClick={() => selectedItem()}
    >
      <div
        className="selected_button"
        style={{ backgroundColor: selectedBcc }}
      ></div>
      <div className="user_init_hover">
        <h4 className="user_init_classification">{props.classification}</h4>
        <h3 className="user_init_name">{props.name}</h3>
        <p className="user_init_text">{props.text}</p>
      </div>
    </div>
  );
};
