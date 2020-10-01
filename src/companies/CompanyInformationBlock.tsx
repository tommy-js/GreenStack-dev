import React from "react";
import Header from "../User/Header";

interface Props {
  title: string;
  price: number;
}

const CompanyInformationBlock: React.FC<Props> = (props) => {
  return (
    <div className="company_information_block">
      <Header text={props.title} />
      <p>Price: {props.price}</p>
    </div>
  );
};

export default CompanyInformationBlock;
