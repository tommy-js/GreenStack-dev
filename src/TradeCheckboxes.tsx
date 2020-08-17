import React from "react";

interface buysell {
  buy: boolean;
  sell: boolean;
}

interface Props {
  setSell: () => void;
  setBuy: () => void;
  calcVal: (shareNum: string) => void;
  shares: number;
  tradeCheckbox: { buy: boolean; sell: boolean };
}

const TradeCheckbox: React.FC<Props> = (props) => {
  return (
    <div>
      <label>Buy</label>
      <input
        type="checkbox"
        onChange={() => props.setBuy()}
        checked={props.tradeCheckbox.buy}
      />
      <label>Sell</label>
      <input
        type="checkbox"
        onChange={() => props.setSell()}
        checked={props.tradeCheckbox.sell}
      />
      <label>Shares: </label>
      <input
        min="0"
        type="number"
        value={props.shares}
        onChange={(e) => props.calcVal(e.target.value)}
      />
    </div>
  );
};

export default TradeCheckbox;
