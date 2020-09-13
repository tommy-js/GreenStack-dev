import React from "react";
import Header from "../Header";

interface Props {
  text: string;
}

const SuggestedCompany: React.FC<Props> = (props) => {
  return (
    <div id="company_mapper">
      <Header text={props.text} />
    </div>
  );
};

export default SuggestedCompany;
