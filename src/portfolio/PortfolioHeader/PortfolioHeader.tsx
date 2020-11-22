import React from "react";

interface Props {
  text: string;
}

export const PortfolioHeader: React.FC<Props> = (props) => {
  return <h2 className="portfolio_header">{props.text}</h2>;
};
