import React, { useContext } from "react";
import Trade from "./Trade";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Props {
  trades: any;
}

const TradeHistory: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Trade History</h2>
      {props.trades.map((el: any) => (
        <Trade tradeId={el.tradeId} name={el.name} ticker={el.ticker} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(TradeHistory);
