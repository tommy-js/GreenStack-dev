import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateNewPortfolioMutation } from "../../queries/queries";

interface Redux {
  onNewPortfolioSet: (newPortfolio: boolean) => void;
}

interface Props extends Redux {
  title: string;
  updateNewPortfolioMutation: (variables: object) => any;
}

const IndividualStockDropdown: React.FC<Props> = (props) => {
  function resolve() {
    let token = sessionStorage.getItem("Token");
    props.onNewPortfolioSet(false);
    props
      .updateNewPortfolioMutation({
        variables: {
          token: token,
          argument: false,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => console.log(res));
  }

  return (
    <div className="individual_stock_dropdown" onClick={() => resolve()}>
      <p className="individual_stock_dropdown_text">{props.title}</p>
    </div>
  );
};

const IndividualStockDropdownRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualStockDropdown);

export const IndividualStockDropdownExp = compose(
  graphql(updateNewPortfolioMutation, {
    name: "updateNewPortfolioMutation",
  })
)(IndividualStockDropdownRedux);
