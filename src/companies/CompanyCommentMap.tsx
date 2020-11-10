import React from "react";
import StockComment from "./StockComment";

interface Props {
  comments: any;
}

const CompanyCommentMap: React.FC<Props> = (props) => {
  function returnComments() {
    if (props.comments) {
      return (
        <div>
          {props.comments.map((el: any) => (
            <StockComment
              username={el.username}
              text={el.text}
              commentId={el.commentId}
              predictedPrice={el.predictedPrice}
              recommendation={el.recommendation}
              timestamp={el.timestamp}
              likes={el.likes}
              dislikes={el.dislikes}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Nothing Here!</h2>
        </div>
      );
    }
  }

  return <div>{returnComments()}</div>;
};

export default CompanyCommentMap;
