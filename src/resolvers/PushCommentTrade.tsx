import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentTradeMutation } from "../queries/queries.js";

interface Props {
  username: string;
  userId: string;
  tradeId: string;
  text: string;
  pushCommentTradeMutation: (variables: object) => void;
}

const PushCommentPost: React.FC<Props> = (props) => {
  function submitComment() {
    let token = sessionStorage.getItem("Token");
    props.pushCommentTradeMutation({
      variables: {
        username: props.username,
        token: token,
        tradeId: props.tradeId,
        text: props.text,
      },
    });
  }

  return <button onClick={() => submitComment()}>Submit</button>;
};

export default compose(
  graphql(pushCommentTradeMutation, { name: "pushCommentTradeMutation" })
)(PushCommentPost);
