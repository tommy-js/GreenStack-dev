import React, { useState, useEffect } from "react";
import AddCommentToStock from "../resolvers/AddCommentToStock";
import CompanyCommentMap from "./CompanyCommentMap";
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
    pollInterval: 500,
  });
  const [comments, setComments] = useState([] as any);

  useEffect(() => {
    if (data) {
      let coms = [...data.stock.comments];
      coms.sort(function (a: any, b: any) {
        return b.timestamp - a.timestamp;
      });
      setComments(data.stock.comments);
    }
  }, [data]);

  return (
    <div id="comment_component">
      <AddCommentToStock stockId={props.stockId} />
      <CompanyCommentMap comments={comments} />
    </div>
  );
};

export default CompanyComments;
