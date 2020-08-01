import React from "react";
import StockComment from "./StockComment";

const CompanyComments: React.FC = () => {
  const testData = [
    {
      user: "Tyler",
      comment: "Stock sucks. Don't buy",
      predictedPrice: 74.5,
      recommendation: "Short",
      timestamp: 2242423,
    },
    {
      user: "John",
      comment: "Tyler sucks. Buy",
      predictedPrice: 132.32,
      recommendation: "Hold",
      timestamp: 242425,
    },
  ];

  return (
    <div id="comment_component">
      {testData.map((el) => (
        <StockComment
          user={el.user}
          comment={el.comment}
          predictedPrice={el.predictedPrice}
          recommendation={el.recommendation}
          timestamp={el.timestamp}
        />
      ))}
    </div>
  );
};

export default CompanyComments;
