import React from "react";
import { Header } from "../../User/Header/Header";

interface Props {
  text: string;
}

export const SuggestedCompany: React.FC<Props> = (props) => {
  return (
    <div id="company_mapper">
      <Header text={props.text} />
    </div>
  );
};
