import React, { useState, useEffect, useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { addCommentTradeMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  addCommentTradeMutation: (variables: object) => any;
  passFunc: boolean;
  tradeId: number;
  text: string;
}

const AddCommentToTrade: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
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
    props
      .addCommentTradeMutation({
        variables: {
          tradeId: props.tradeId,
          userId: userVal.userId,
          username: userVal.username,
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
