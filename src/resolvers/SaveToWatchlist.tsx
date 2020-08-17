import React, { useState, useEffect, useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { pushStockToWatchlistMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  stockId: number;
  toggle: boolean;
  title: string;
  ticker: string;
  pushStockToWatchlistMutation: (variables: object) => void;
  saveToWatchlist: () => void;
}

const SaveToWatchlist: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [toggle, setToggle] = useState(props.toggle);
  useEffect(() => {
    setToggle(true);
    if (toggle === true) {
      setToggle(false);
      pushData();
      console.log("passed in");
    }
  }, [props.toggle]);

  function pushData() {
    const parsedId = parseInt(userVal.userId);
    let time = Math.floor(Date.now() / 1000);
    props.pushStockToWatchlistMutation({
      variables: {
        userId: parsedId,
        stockId: props.stockId,
        title: props.title,
        ticker: props.ticker,
        timestamp: time,
      },
    });
  }

  return null;
};

export default compose(
  graphql(pushStockToWatchlistMutation, {
    name: "pushStockToWatchlistMutation",
  })
)(SaveToWatchlist);
