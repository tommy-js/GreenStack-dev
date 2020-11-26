import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
  likeStockMutation,
  dislikeStockMutation,
} from "../../queries/queries.js";

interface Props {
  likes: number;
  dislikes: number;
  commentId: string;
  likeStockMutation: (variables: object) => any;
  dislikeStockMutation: (variables: object) => any;
}

const LikeComponentRender: React.FC<Props> = (props) => {
  function like() {
    let token = sessionStorage.getItem("Token");
    props
      .likeStockMutation({
        variables: {
          token: token,
          text: "Liked stock comment",
          style: "Like",
          commentId: props.commentId,
          likes: 1,
        },
      })
      .catch((err: any) => {
        console.log(err);
      })
      .then((res: any) => {
        console.log(res);
      });
  }

  function dislike() {
    props
      .dislikeStockMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
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

  return (
    <React.Fragment>
      <p>
        {props.likes} / {props.dislikes}
      </p>
      <button onClick={() => like()}>Like</button>
      <button onClick={() => dislike()}>Dislike</button>
    </React.Fragment>
  );
};

const LikeComponentMutation = compose(
  graphql(likeStockMutation, { name: "likeStockMutation" })
)(LikeComponentRender);

export const LikeComponent = compose(
  graphql(dislikeStockMutation, { name: "dislikeStockMutation" })
)(LikeComponentMutation);
