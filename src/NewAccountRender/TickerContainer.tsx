import React from "react";

interface Props {
  ticker: string;
}

const TickerContainer: React.FC<Props> = (props) => {
  return (
    <div className="ticker_container">
      <p className="ticker_id">{props.ticker}</p>
    </div>
  );
};

export default TickerContainer;
