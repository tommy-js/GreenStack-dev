import React, { useState, useEffect, useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { addCommentStockMutation } from "../queries/queries.js";

interface Props {
  addCommentStockMutation: (variables: object) => any;
  passFunc: boolean;
  stockId: number;
  text: string;
  userId: string;
  username: string;
}

const AddCommentToStock: React.FC<Props> = (props) => {
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
    props
      .addCommentStockMutation({
        variables: {
          stockId: props.stockId,
          userId: props.userId,
          username: props.username,
          text: props.text,
        },
      })
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
  }

  return null;
};

export default compose(
  graphql(addCommentStockMutation, { name: "addCommentStockMutation" })
)(AddCommentToStock);
