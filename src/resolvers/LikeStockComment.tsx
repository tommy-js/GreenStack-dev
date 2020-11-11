import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likeStockMutation } from "../queries/queries.js";

interface Props {
  commentId: string;
  likes: number;
  likeStockMutation: (variables: object) => any;
}

const LikeStock: React.FC<Props> = (props) => {
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

  return <button onClick={() => like()}>Like</button>;
};

export default compose(
  graphql(likeStockMutation, { name: "likeStockMutation" })
)(LikeStock);
