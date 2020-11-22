import React from "react";

interface Props {
  text: string;
}

export const MainPortfolioHeader: React.FC<Props> = (props) => {
  return <h1 className="main_portfolio_header">{props.text}</h1>;
};
