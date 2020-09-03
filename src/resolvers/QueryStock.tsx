import React, { useEffect } from "react";
import { flowRight as compose } from "lodash";
import { graphql, useLazyQuery } from "react-apollo";
import { stockQuery } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  stockId: number;
  stockQuery: (variables: object) => void;
}

const QueryStock: React.FC<Props> = (props) => {
  const [getStock, { data, loading }] = useLazyQuery(stockQuery);
  useEffect(() => {
    getStock({
      variables: {
        stockId: props.stockId,
      },
    });
  }, [props.stockId]);

  return null;
};

export default compose(graphql(stockQuery, { name: "stockQuery" }))(QueryStock);
