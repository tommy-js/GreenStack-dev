import React, { useState, useEffect, useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { addCommentStockMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  addCommentStockMutation: (variables: object) => void;
  passFunc: boolean;
  stockId: number;
  text: string;
}

const AddCommentToStock: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [passFunc, setPassFunc] = useState(props.passFunc);

  useEffect(() => {
    setPassFunc(true);
    if (passFunc === true) {
      setPassFunc(false);
      console.log("addCommentStockMutation");
      pushData();
    }
  }, [props.passFunc]);

  function pushData() {
    let time = Math.floor(Date.now() / 1000);
    props.addCommentStockMutation({
      variables: {
        stockId: props.stockId,
        userId: userVal.userId,
        username: userVal.username,
        text: props.text,
        timestamp: time,
      },
    });
  }

  return null;
};

export default compose(
  graphql(addCommentStockMutation, { name: "addCommentStockMutation" })
)(AddCommentToStock);
