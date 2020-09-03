import React from "react";
import StockComment from "./StockComment";

interface Props {
  comments: any;
}

const CompanyStockListing: React.FC<Props> = (props) => {
  return (
    <div>
      {props.comments.map((el: any) => (
        <StockComment
          user={el.user}
          comment={el.comment}
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
};

export default CompanyStockListing;
