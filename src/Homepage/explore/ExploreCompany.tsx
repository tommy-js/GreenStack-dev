import React from "react";
import { Link } from "react-router-dom";

type Company = {
  keyId: number;
  stockId: string;
  title: string;
  ticker: string;
  description: string;
};

interface Props {
  company: Company;
}

export const ExploreCompany: React.FC<Props> = ({ company }: Props) => {
  return (
    <div key={company.keyId} className="homepage_block_component">
      <Link className="block_link" to={`/home/stock/${company.stockId}`}>
        <p>
          {company.title} #{company.ticker}
        </p>
        <p>{company.description}</p>
      </Link>
    </div>
  );
};
