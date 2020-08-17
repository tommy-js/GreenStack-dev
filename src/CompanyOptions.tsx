import React, { useState } from "react";
import SaveToWatchlist from "./resolvers/SaveToWatchlist";

interface Props {
  stockId: number;
  title: string;
  ticker: string;
}

const CompanyOptions: React.FC<Props> = (props) => {
  const [toggle, setToggle] = useState(false);
  function saveToWatchlist() {
    setToggle(true);
  }

  return (
    <div className="default_middle">
      <button onClick={() => saveToWatchlist()}>Save to watchlist</button>
      <SaveToWatchlist
        title={props.title}
        ticker={props.ticker}
        stockId={props.stockId}
        toggle={toggle}
      />
    </div>
  );
};

export default CompanyOptions;
