import React from "react";
import { OwnedElement } from "../OwnedElement/OwnedElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  stocks: StockItem[];
}

const OwnedStocks: React.FC<Redux> = (props) => {
  return (
    <div>
      {props.stocks.map((el: StockItem) => (
        <OwnedElement title={el.title} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(OwnedStocks);
