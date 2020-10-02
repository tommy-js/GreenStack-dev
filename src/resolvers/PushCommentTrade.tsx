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
    props.pushCommentTradeMutation({
      variables: {
        username: props.username,
        userId: props.userId,
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
