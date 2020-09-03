import React, { useState } from "react";
import CommentInputStock from "../CommentInputStock";
import QueryStock from "../resolvers/QueryStock";
import CompanyStockListing from "../CompanyStockListing";

interface Props {
  title: string;
  ticker: string;
  stockId: number;
}
const CompanyComments: React.FC<Props> = (props) => {
  const [comments, setComments] = useState();

  function checkComments() {
    if (comments) {
      return <CompanyStockListing comments={comments} />;
    } else {
      return null;
    }
  }

  return (
    <div id="comment_component">
      <CommentInputStock stockId={props.stockId} />
      {checkComments()}
      <QueryStock stockId={props.stockId} />
    </div>
  );
};

export default CompanyComments;
