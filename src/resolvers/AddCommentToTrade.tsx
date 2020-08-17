import React, { useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { addCommentTradeMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  addCommentTradeMutation: (variables: object) => void;
  tradeId: number;
  text: string;
}

const AddCommentToTrade: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  function submit() {
    props.addCommentTradeMutation({
      variables: {
        tradeId: props.tradeId,
        userId: userVal.userId,
        username: userVal.username,
        text: props.text,
      },
    });
  }
  return null;
};

export default compose(
  graphql(addCommentTradeMutation, { name: "addCommentTradeMutation" })
)(AddCommentToTrade);
