import React, { useEffect } from "react";
import ExploreCompany from "./ExploreCompany";

interface Props {
  companies: any;
  technology: any;
  manufacturing: any;
  energy: any;
}

const Explore: React.FC<Props> = (props) => {
  return (
    <div className="explore_container">
      <h3 className="explore_header">You May Be Interested In...</h3>
      <h2 className="explore_company_header">Technology</h2>
      {props.technology.map((el: any) => (
        <div key={el.stockId}>
          <ExploreCompany
            keyId={el.stockId}
            stockId={el.stockId}
            title={el.title}
            ticker={el.ticker}
            description={el.description}
          />
        </div>
      ))}
      <h2 className="explore_company_header">Manufacturing</h2>
      {props.manufacturing.map((el: any) => (
        <div key={el.stockId}>
          <ExploreCompany
            keyId={el.stockId}
            stockId={el.stockId}
            title={el.title}
            ticker={el.ticker}
            description={el.description}
          />
        </div>
      ))}
      <h2 className="explore_company_header">Energy</h2>
      {props.energy.map((el: any) => (
        <div key={el.stockId}>
          <ExploreCompany
            keyId={el.stockId}
            stockId={el.stockId}
            title={el.title}
            ticker={el.ticker}
            description={el.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Explore;
