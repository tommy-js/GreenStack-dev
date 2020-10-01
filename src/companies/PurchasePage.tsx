import React, { useState, useContext, useEffect } from "react";
import PurchaseStock from "../resolvers/PurchaseStock";
import AuctionStock from "../resolvers/AuctionStock";
import { userContext } from "../AppMain/App";

interface Props {
  stockId: string;
  userId: string;
  price: number;
}

export const BuyStock: React.FC<Props> = (props) => {
  const [purchaseNum, setPurchaseNum] = useState(0);
  const [cantAfford, setCantAfford] = useState(false);
  const { userVal } = useContext(userContext);

  function coerceInt(val: string) {
    let int = parseInt(val);
    setPurchaseNum(int);
  }

  function returnCannotAfford() {
    setCantAfford(true);
  }

  return (
    <div>
      <input
        style={{ border: `1px solid ${cantAfford === true ? "red" : "black"}` }}
        type="number"
        value={purchaseNum}
        onChange={(e) => coerceInt(e.target.value)}
        placeholder="Buy"
      />
      <PurchaseStock
        stockId={props.stockId}
        userId={props.userId}
        shares={purchaseNum}
        price={props.price}
        money={userVal.money}
        returnCannotAfford={returnCannotAfford}
      />
    </div>
  );
};

export const SellStock: React.FC<Props> = (props) => {
  const [sellNum, setSellNum] = useState(0);
  const { userVal } = useContext(userContext);
  const [dontHave, setDontHave] = useState(false);

  function coerceInt(val: string) {
    let int = parseInt(val);
    setSellNum(int);
  }

  function returnCannotAfford() {
    setDontHave(true);
  }

  return (
    <div>
      <input
        style={{ border: `1px solid ${dontHave === true ? "red" : "black"}` }}
        type="number"
        value={sellNum}
        onChange={(e) => coerceInt(e.target.value)}
        placeholder="Sell"
      />
      <AuctionStock
        stockId={props.stockId}
        userId={props.userId}
        price={props.price}
        shares={sellNum}
        money={userVal.money}
      />
    </div>
  );
};
