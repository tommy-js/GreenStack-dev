import React, { useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { updateMoneyMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  updateMoneyMutation: (variables: object) => void;
  exchangeVal: number;
}

const PushMoneyToUser: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  function pushData() {
    props.updateMoneyMutation({
      variables: {
        userId: userVal.userId,
        money: props.exchangeVal,
      },
    });
  }
  return null;
};

export default compose(
  graphql(updateMoneyMutation, { name: "updateMoneyMutation" })
)(PushMoneyToUser);
