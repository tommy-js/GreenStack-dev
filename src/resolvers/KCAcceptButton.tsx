import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserProgressMutation } from "../queries/queries";

interface Props {
  progressOnComplete: number;
  id: number;
  correct: boolean;
  currentProgress: number;
  updateUserProgressMutation: (variables: object) => any;
}

const KCAcceptButton: React.FC<Props> = (props) => {
  function submit() {
    if (props.correct === true) {
      let currentPercent = props.currentProgress + props.progressOnComplete;
      props
        .updateUserProgressMutation({
          variables: {
            id: props.id,
            percent: currentPercent,
          },
        })
        .then((res: any) => console.log("passed"))
        .catch((res: any) => console.log("err"));
    } else {
      console.log("wrong answer!");
    }
  }

  return <button onClick={() => submit()}>Submit</button>;
};

export default compose(
  graphql(updateUserProgressMutation, { name: "updateUserProgressMutation" })
)(KCAcceptButton);
