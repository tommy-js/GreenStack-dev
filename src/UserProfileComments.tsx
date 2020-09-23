import React, { useContext, useState, useEffect } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { browserHist } from "./AppMain/history.js";
import {
  deleteCommentUserMutation,
  deleteCommentStockMutation,
} from "./queries/queries.js";
import { userContext, statusContext } from "./AppMain/App";

interface Props {
  deleteCommentUserMutation: (variables: object) => void;
  deleteCommentStockMutation: (variables: object) => void;
}

const UserProfileComments: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [comments, setComments] = useState([
    {
      userId: 0,
      username: "",
      comment: "",
      likes: 0,
      dislikes: 0,
      commentId: 0,
      tradeId: 0,
    },
  ]);

  useEffect(() => {
    if (userVal.comments) {
      setComments(userVal.comments);
    }
  }, [userVal]);

  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

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
      return <div></div>;
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
