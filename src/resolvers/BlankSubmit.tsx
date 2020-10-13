import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserProgressMutation } from "../queries/queries.js";

interface Props {
  submit: (set: boolean) => void;
  increment: number;
  id: string;
  specId: string;
  updateUserProgressMutation: (variables: object) => any;
}

const BlankSubmit: React.FC<Props> = (props) => {
  function submit() {
    props
      .updateUserProgressMutation({
        variables: {
          id: props.id,
          specId: props.specId,
          increment: props.increment,
        },
      })
      .then((res: any) => {
        props.submit(true);
        console.log(res);
      })
      .catch((err: any) => console.log(err));
  }

  return (
    <button className="blank_submit" onClick={() => submit()}>
      Submit
    </button>
  );
};

export default compose(
  graphql(updateUserProgressMutation, { name: "updateUserProgressMutation" })
)(BlankSubmit);
