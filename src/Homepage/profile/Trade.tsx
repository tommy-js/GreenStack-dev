import React from "react";

interface Props {
  tradeId: number;
  name: string;
  ticker: string;
}

const Trade: React.FC<Props> = (props) => {
  return (
    <div className="profile_trade">
      <p>
        {props.name} #{props.ticker}
      </p>
    </div>
  );
};

export default Trade;
