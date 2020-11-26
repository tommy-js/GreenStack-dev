import React, { useState } from "react";
import { pushStockToUserMutation } from "../../queries/queries";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { connect } from "react-redux";
import { validateString, validateStocks } from "./index";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  stocks: StockItem[];
  onStocksSet: (stocks: StockItem[]) => void;
}

interface Props extends Redux {
  stockId: string;
  title: string;
  ticker: string;
  pushStockToUserMutation: (variables: object) => any;
}

const OwnedStockSpecRender: React.FC<Props> = (props) => {
  const [inputVal, setInputVal] = useState("");

  function modVal(input: string) {
    let validated = validateString(input);
    setInputVal(validated);
  }

  function pushStock() {
    let token = sessionStorage.getItem("Token");

    let parsedInputVal = parseInt(inputVal);
    let validateObj = validateStocks(
      props.stocks,
      parsedInputVal,
      props.stockId,
      props.title,
      props.ticker
    );

    props
      .pushStockToUserMutation({
        variables: {
          token: token,
          stockId: props.stockId,
          title: props.title,
          ticker: props.ticker,
          shares: parsedInputVal,
        },
      })
      .catch((err: any) => {
        console.log(err);
      })
      .then((res: any) => {
        console.log(res);
        props.onStocksSet(validateObj);
      });
  }

  return (
    <div className="owned_stock_spec">
      <label className="owned_stock_label">Owned Shares</label>
      <input
        className="owned_stock_input"
        type="text"
        placeholder="0"
        value={inputVal}
        onChange={(e) => modVal(e.target.value)}
      />
      <button className="owned_stock_button" onClick={() => pushStock()}>
        Add
      </button>
    </div>
  );
};

const OwnedStockSpecRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnedStockSpecRender);

export const OwnedStockSpec = compose(
  graphql(pushStockToUserMutation, { name: "pushStockToUserMutation" })
)(OwnedStockSpecRedux);
