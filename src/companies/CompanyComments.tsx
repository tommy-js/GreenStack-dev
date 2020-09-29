import React, { useState } from "react";
import CommentInputStock from "./CommentInputStock";
import QueryStock from "../resolvers/QueryStock";
import CompanyStockListing from "./CompanyStockListing";

interface Props {
  title: string;
  ticker: string;
  stockId: string;
}
const CompanyComments: React.FC<Props> = (props) => {
  const [comments, setComments] = useState([]);

  return (
    <div id="comment_component">
      <CommentInputStock stockId={props.stockId} />
      <CompanyStockListing comments={comments} />
      <QueryStock stockId={props.stockId} />
    </div>
  );
};

export default CompanyComments;
