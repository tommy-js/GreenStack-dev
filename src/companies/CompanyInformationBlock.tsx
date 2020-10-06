import React from "react";
import Header from "../User/Header";

interface Props {
  title: string;
}

const CompanyInformationBlock: React.FC<Props> = (props) => {
  return (
    <div className="company_information_block">
      <Header text={props.title} />
    </div>
  );
};

export default CompanyInformationBlock;
