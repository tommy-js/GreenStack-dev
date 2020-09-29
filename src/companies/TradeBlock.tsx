import React, { useState } from "react";
import { browserHist } from "../AppMain/history";

interface Props {
  stockId: string;
}

const TradeBlock: React.FC<Props> = (props) => {
  const [overlay, setOverlay] = useState(false);
  const [tradeVal, setTradeVal] = useState(0);

  function pushDomain(method: string) {
    browserHist.push(`/home/stock/${props.stockId}/${method}`);
  }

  return (
    <div>
      <button onClick={() => pushDomain("buy")}>Buy</button>
      <button onClick={() => pushDomain("sell")}>Sell</button>
      <button>Options</button>
    </div>
  );
};

export default TradeBlock;
