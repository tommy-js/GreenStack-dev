import React, { useState, useEffect } from "react";
import ShareListing from "./ShareListing";

interface Props {
  owned: any;
}

const OwnedStocks: React.FC<Props> = (props) => {
  const [trades, setTrades] = useState([] as any);

  useEffect(() => {
    console.log(props.owned);
    let trades = [];
    for (let i = 0; i < props.owned.length; i++) {
      if (props.owned[i].shares != 0) {
        trades.push(props.owned[i]);
        console.log("pushing trade to ownedstocks");
      }
    }
    console.log("trades: ");
    console.log(trades);
    setTrades(trades);
  }, [props.owned]);

  function returnRender() {
    if (trades.length != 0) {
      return (
        <div id="owned_stocked">
          {trades.map((el: any) => (
            <div>
              <ShareListing
                stockId={el.stockId}
                title={el.title}
                ticker={el.ticker}
                shares={el.shares}
                price={el.price}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }

  return <div>{returnRender()}</div>;
};

export default OwnedStocks;
