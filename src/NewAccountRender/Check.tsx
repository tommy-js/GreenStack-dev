import React from "react";

interface Props {
  name: string;
  text: string;
  classification: string;
}

const Check: React.FC<Props> = (props) => {
  return (
    <div className="user_init_check">
      <h4 className="user_init_classification">{props.classification}</h4>
      <div className="user_init_hover">
        <h3 className="user_init_name">{props.name}</h3>
        <p className="user_init_text">{props.text}</p>
      </div>
    </div>
  );
};

export default Check;
