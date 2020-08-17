import React from "react";
import StockComment from "../StockComment";

const CompanyComments: React.FC = () => {
  const testData = [
    {
      user: "Tyler",
      comment: "Stock sucks. Don't buy",
      commentId: 9,
      predictedPrice: 74.5,
      recommendation: "Short",
      timestamp: 2242423,
      likes: 23,
      dislikes: 103,
    },
    {
      user: "John",
      comment: "Tyler sucks. Buy",
      commentId: 343,
      predictedPrice: 132.32,
      recommendation: "Hold",
      timestamp: 242425,
      likes: 302,
      dislikes: 1,
    },
  ];

  return (
    <div id="comment_component">
      {testData.map((el) => (
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

export default CompanyComments;
