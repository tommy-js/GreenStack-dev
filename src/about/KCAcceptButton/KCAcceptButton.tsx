import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserProgressMutation } from "../../queries/queries.js";

interface Props {
  id: string;
  specId: string;
  increment: number;
  correct: boolean;
  currentProgress: number;
  updateUserProgressMutation: (variables: object) => any;
  returnRes: (ans: boolean) => void;
}

const KCAcceptButtonMutation: React.FC<Props> = (props) => {
  function submit() {
    if (props.correct === true) {
      props.returnRes(true);
      props
        .updateUserProgressMutation({
          variables: {
            id: props.id,
            specId: props.specId,
            increment: props.increment,
          },
        })
        .then((res: any) => console.log(res))
        .catch((err: any) => console.log(err));
    } else {
      props.returnRes(false);
    }
  }

  return <button onClick={() => submit()}>Check</button>;
};

export const KCAcceptButton = compose(
  graphql(updateUserProgressMutation, { name: "updateUserProgressMutation" })
)(KCAcceptButtonMutation);
