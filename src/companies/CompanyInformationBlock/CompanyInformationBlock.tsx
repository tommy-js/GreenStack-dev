import React from "react";
import { Header } from "../../User/Header/Header";

interface Props {
  title: string;
}

export const CompanyInformationBlock: React.FC<Props> = (props) => {
  return (
    <div className="company_information_block">
      <Header text={props.title} />
    </div>
  );
};
