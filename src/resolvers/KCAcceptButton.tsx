import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserProgressMutation } from "../queries/queries";

interface Props {
  progressOnComplete: number;
  id: number;
  updateUserProgressMutation: (variables: object) => any;
}

const KCAcceptButton: React.FC<Props> = (props) => {
  function submit() {
    props
      .updateUserProgressMutation({
        variables: {
          id: props.id,
          percent: props.progressOnComplete,
        },
      })
      .then((res: any) => console.log("passed"))
      .catch((res: any) => console.log("err"));
  }

  return <button onClick={() => submit()}>Submit</button>;
};

export default compose(
  graphql(updateUserProgressMutation, { name: "updateUserProgressMutation" })
)(KCAcceptButton);
