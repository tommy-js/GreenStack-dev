import React, { useState, useContext, useEffect } from "react";
import PurchaseStock from "../resolvers/PurchaseStock";
import AuctionStock from "../resolvers/AuctionStock";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Props {
  stockId: string;
  stockTitle: string;
  userId: string;
  price: number;
  money: any;
}

const BuyStock: React.FC<Props> = (props) => {
  const [purchaseNum, setPurchaseNum] = useState(0);
  const [cantAfford, setCantAfford] = useState(false);

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
        stockTitle={props.stockTitle}
        shares={purchaseNum}
        price={props.price}
        money={props.money}
        returnCannotAfford={returnCannotAfford}
      />
    </div>
  );
};

const SellStock: React.FC<Props> = (props) => {
  const [sellNum, setSellNum] = useState(0);
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
        money={props.money}
      />
    </div>
  );
};

export const Buy = connect(mapStateToProps)(BuyStock);
export const Sell = connect(mapStateToProps)(SellStock);
