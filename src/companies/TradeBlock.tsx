import React, { useState } from "react";
import { browserHist } from "../AppMain/history";

interface Props {
  stockId: string;
}

const TradeBlock: React.FC<Props> = (props) => {
  function pushDomain(method: string) {
    browserHist.push(`/home/stock/${props.stockId}/${method}`);
  }

  return (
    <div>
      <button onClick={() => pushDomain("buy")}>Buy</button>
      <button onClick={() => pushDomain("sell")}>Sell</button>
      <button onClick={() => pushDomain("options")}>Options</button>
    </div>
  );
};

export default TradeBlock;
