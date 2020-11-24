import React from "react";
import { ExploreCompany } from "../ExploreCompany/ExploreCompany";

type Company = {
  keyId: number;
  stockId: string;
  title: string;
  ticker: string;
  description: string;
};

interface Props {
  companies: Company[];
  technology: Company[];
  manufacturing: Company[];
  energy: Company[];
}

export const Explore: React.FC<Props> = (props) => {
  return (
    <div className="explore_container">
      <h3 className="explore_header">You May Be Interested In...</h3>
      <h2 className="explore_company_header">Technology</h2>
      {props.technology.map((el: Company) => (
        <div key={el.stockId}>
          <ExploreCompany company={el} />
        </div>
      ))}
      <h2 className="explore_company_header">Manufacturing</h2>
      {props.manufacturing.map((el: Company) => (
        <div key={el.stockId}>
          <ExploreCompany company={el} />
        </div>
      ))}
      <h2 className="explore_company_header">Energy</h2>
      {props.energy.map((el: Company) => (
        <div key={el.stockId}>
          <ExploreCompany company={el} />
        </div>
      ))}
    </div>
  );
};
