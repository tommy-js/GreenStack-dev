import React from "react";
import Header from "./Header";

interface Props {
  title: string;
  price: string;
}

const CompanyInformationBlock: React.FC<Props> = (props) => {
  return (
    <div className="company_information_block">
      <Header text={props.title} />
      <p>{props.price}</p>
    </div>
  );
};

export default CompanyInformationBlock;
