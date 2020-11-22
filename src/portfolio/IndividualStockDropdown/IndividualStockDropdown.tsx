import React from "react";

interface Props {
  title: string;
}

export const IndividualStockDropdown: React.FC<Props> = (props) => {
  return (
    <div className="individual_stock_dropdown">
      <p className="individual_stock_dropdown_text">{props.title}</p>
    </div>
  );
};
