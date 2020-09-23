import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likeStockMutation } from "../queries/queries.js";

interface Props {
  commentId: number;
  likes: number;
  likeStockMutation: (variables: object) => void;
}

const LikeStock: React.FC<Props> = (props) => {
  function like() {
    props.likeStockMutation({
      variables: {
        commentId: props.commentId,
        likes: props.likes,
      },
    });
  }

  return <button onClick={() => like()}>Like</button>;
};

export default compose(
  graphql(likeStockMutation, { name: "likeStockMutation" })
)(LikeStock);
