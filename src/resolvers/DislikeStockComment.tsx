import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikeStockMutation } from "../queries/queries.js";

interface Props {
  commentId: string;
  dislikes: number;
  dislikeStockMutation: (variables: object) => any;
}

const DislikeStock: React.FC<Props> = (props) => {
  function dislike() {
    let token = sessionStorage.getItem("Token");
    props
      .dislikeStockMutation({
        variables: {
          token: token,
          text: "Disliked stock comment",
          style: "Dislike",
          commentId: props.commentId,
          dislikes: 1,
        },
      })
      .catch((err: any) => {
        console.log(err);
      })
      .then((res: any) => {
        console.log(res);
      });
  }

  return <button onClick={() => dislike()}>Dislike</button>;
};

export default compose(
  graphql(dislikeStockMutation, { name: "dislikeStockMutation" })
)(DislikeStock);
