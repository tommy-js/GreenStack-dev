import React, { useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { updateMoney } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  updateMoney: (variables: object) => void;
  exchangeVal: number;
}

const PushMoneyToUser: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  function pushData() {
    props.updateMoney({
      variables: {
        userId: userVal.userId,
        money: props.exchangeVal,
      },
    });
  }
  return null;
};

export default compose(graphql(updateMoney, { name: "updateMoney" }))(
  PushMoneyToUser
);
