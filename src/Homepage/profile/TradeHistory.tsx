import React, { useContext } from "react";
import Trade from "./Trade";
import { userContext } from "../../AppMain/App";

const TradeHistory: React.FC = () => {
  const { userVal } = useContext(userContext);

  return (
    <div>
      <h2>Trade History</h2>
      {userVal.trades.map((el: any) => (
        <Trade tradeId={el.tradeId} name={el.name} ticker={el.ticker} />
      ))}
    </div>
  );
};

export default TradeHistory;
