import React, { useContext, useState } from "react";
import ProfileComments from "./profile/ProfileComments";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import {
  deleteCommentUserMutation,
  deleteCommentStockMutation,
} from "./queries/queries.js";
import { userContext } from "./AppMain/App";

interface Props {
  deleteCommentUserMutation: (variables: object) => void;
  deleteCommentStockMutation: (variables: object) => void;
}

const UserProfileComments: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const comments = userVal.comments;

  function removeComment(commentId: number, userId: number, stockId: number) {
    let testArray = comments;
    let foundElement = testArray.find((el: any) => el.commentId === commentId);
    if (foundElement) {
      let elementIndex = testArray.indexOf(foundElement);
      testArray.splice(elementIndex, 1);
      console.log(testArray);
    }
    props.deleteCommentUserMutation({
      variables: {
        commentId: commentId,
        userId: userId,
      },
    });
    props.deleteCommentStockMutation({
      variables: {
        stockId: stockId,
        userId: userId,
      },
    });
  }

  function checkComments() {
    if (comments.length > 0) {
      return (
        <div>
          {comments.map((el: any) => (
            <ProfileComments
              removeComment={removeComment}
              userId={el.userId}
              username={el.username}
              comment={el.comment}
              likes={el.likes}
              dislikes={el.dislikes}
              commentId={el.commentId}
              tradeId={el.tradeId}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h2>No Comments So Far...</h2>
        </div>
      );
    }
  }

  return <div>{checkComments()}</div>;
};

export default compose(
  graphql(deleteCommentUserMutation, { name: "deleteCommentUserMutation" })
)(UserProfileComments);
