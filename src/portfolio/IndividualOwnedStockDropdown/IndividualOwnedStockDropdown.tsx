import React, { useState } from "react";
import { OwnedStockSpec } from "../OwnedStockSpec/OwnedStockSpec";

interface Props {
  stockId: string;
  title: string;
  ticker: string;
}

export const IndividualOwnedStockDropdown: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  function openSpecs() {
    if (show === true) {
      return (
        <OwnedStockSpec
          stockId={props.stockId}
          title={props.title}
          ticker={props.ticker}
        />
      );
    } else return null;
  }

  return (
    <div className="individual_stock_dropdown">
      <p
        className="individual_stock_dropdown_text"
        onClick={() => setShow(!show)}
      >
        {props.title}
      </p>
      {openSpecs()}
    </div>
  );
};
