import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikeStockMutation } from "../queries/queries.js";

interface Props {
  commentId: number;
  dislikes: number;
  dislikeStockMutation: (variables: object) => void;
}

const DislikeStock: React.FC<Props> = (props) => {
  function dislike() {
    props.dislikeStockMutation({
      variables: {
        commentId: props.commentId,
        dislikes: props.dislikes,
      },
    });
  }

  return <button onClick={() => dislike()}>Dislike</button>;
};

export default compose(
  graphql(dislikeStockMutation, { name: "dislikeStockMutation" })
)(DislikeStock);
