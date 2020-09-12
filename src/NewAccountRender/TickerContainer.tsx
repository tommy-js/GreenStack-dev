import React from "react";

interface Props {
  ticker: string;
}

const TickerContainer: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.ticker}</p>
    </div>
  );
};

export default TickerContainer;
