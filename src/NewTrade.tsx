import React, { useContext, useState } from "react";
import TradeCheckbox from "./TradeCheckboxes";
import PushMoneyToUser from "./resolvers/PushMoneyToUser";
import PushSharesToUser from "./resolvers/PushSharesToUser";
import { userContext } from "./AppMain/App";

interface Props {
  title: string;
  stockId: number;
  ticker: string;
  purchasePrice: number;
  currentPrice: number;
  shares: number;
}

const NewTrade: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [shareId, setShareId] = useState(Math.floor(Math.random() * 100000));
  const [shares, setShares] = useState(props.shares);
  const [totalGain, setTotalGain] = useState(props.currentPrice * props.shares);
  const [syntax, setSyntax] = useState("Cost: ");
  const [exchangeVal, setExchangeVal] = useState();
  const [tradeCheckbox, setTradeCheckbox] = useState({
    buy: true,
    sell: false,
  });

  function calcVal(shareNum: string) {
    let sharesNow = parseInt(shareNum);
    setShares(sharesNow);
    let totalVal = props.currentPrice * sharesNow;
    setTotalGain(totalVal);
  }

  function setBuy() {
    setTradeCheckbox({ buy: true, sell: false });
    setSyntax("Cost: ");
  }

  function setSell() {
    setTradeCheckbox({ buy: false, sell: true });
    setSyntax("Gain: ");
  }

  function executeTrade() {
    let exchangeVal;
    if (tradeCheckbox.buy === true) {
      setExchangeVal(userVal.money - totalGain);
    } else {
      setExchangeVal(userVal.money + totalGain);
    }
  }

  return (
    <div>
      <h1>
        {props.title} #{props.ticker}
      </h1>
      <TradeCheckbox
        setSell={setSell}
        setBuy={setBuy}
        calcVal={calcVal}
        shares={shares}
        tradeCheckbox={tradeCheckbox}
      />
      <div>
        {syntax} ${totalGain}
      </div>
      <button onClick={() => executeTrade()}>Execute</button>
      <PushMoneyToUser exchangeVal={exchangeVal} />
      <PushSharesToUser
        shareId={shareId}
        stockId={props.stockId}
        shares={shares}
      />
    </div>
  );
};

export default NewTrade;
