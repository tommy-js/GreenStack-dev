import React, { useState, useEffect } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { addCommentTradeMutation } from "../queries/queries.js";

interface Props {
  addCommentTradeMutation: (variables: object) => any;
  passFunc: boolean;
  tradeId: number;
  text: string;
}

const AddCommentToTrade: React.FC<Props> = (props) => {
  const [passFunc, setPassFunc] = useState(props.passFunc);

  useEffect(() => {
    setPassFunc(true);
    if (passFunc === true) {
      setPassFunc(false);
      console.log("addCommentTradeMutation");
      pushData();
    }
  }, [props.passFunc]);

  function pushData() {
    let token = sessionStorage.getItem("Token");
    props
      .addCommentTradeMutation({
        variables: {
          tradeId: props.tradeId,
          token: token,
          text: props.text,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => console.log(res));
  }

  return null;
};

export default compose(
  graphql(addCommentTradeMutation, { name: "addCommentTradeMutation" })
)(AddCommentToTrade);
