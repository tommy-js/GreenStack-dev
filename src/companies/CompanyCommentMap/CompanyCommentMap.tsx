import React from "react";
import { StockComment } from "../StockComment/StockComment";
import { CommentItem } from "../../types/types";

interface Props {
  comments: CommentItem[];
}

export const CompanyCommentMap: React.FC<Props> = (props) => {
  function returnComments() {
    if (props.comments) {
      return (
        <React.Fragment>
          {props.comments.map((el: CommentItem) => (
            <StockComment
              username={el.username}
              text={el.text}
              commentId={el.commentId}
              timestamp={el.timestamp}
              likes={el.likes}
              dislikes={el.dislikes}
            />
          ))}
        </React.Fragment>
      );
    } else {
      return <h2>Nothing Here!</h2>;
    }
  }

  return <div>{returnComments()}</div>;
};
