import React, { useState, useEffect } from "react";
import CommentInputStock from "./CommentInputStock";
import CompanyStockListing from "./CompanyStockListing";
import { useQuery } from "react-apollo";
import { stockQuery } from "../queries/queries";

interface Props {
  title: string;
  ticker: string;
  stockId: string;
}
const CompanyComments: React.FC<Props> = (props) => {
  const { data, loading } = useQuery(stockQuery, {
    variables: { stockId: props.stockId },
  });
  const [comments, setComments] = useState([] as any);

  useEffect(() => {
    if (data) {
      setComments(data.stock.comments);
    }
  }, [data]);

  return (
    <div id="comment_component">
      <CommentInputStock stockId={props.stockId} />
      <CompanyStockListing comments={comments} />
    </div>
  );
};

export default CompanyComments;
