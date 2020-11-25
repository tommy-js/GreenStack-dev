import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentStockMutation } from "../../queries/queries.js";
import { taggedUsers } from "./index";

interface Props {
  username: string;
  userId: string;
  stockId: string;
  text: string;
  pushCommentStockMutation: (variables: object) => void;
}

const PushCommentStockRender: React.FC<Props> = (props) => {
  function submitComment() {
    let taggedArr = taggedUsers(props.text);

    props.pushCommentStockMutation({
      variables: {
        username: props.username,
        stockId: props.stockId,
        token: sessionStorage.getItem("Token"),
        text: props.text,
        taggedUsers: taggedArr,
      },
    });
  }

  return <button onClick={() => submitComment()}>Submit</button>;
};

export const PushCommentStock = compose(
  graphql(pushCommentStockMutation, { name: "pushCommentStockMutation" })
)(PushCommentStockRender);
