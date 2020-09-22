import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { postMutation } from "../queries/queries.js";

interface Props {
  userId: number;
  username: string;
  text: string;
  postMutation: (variables: object) => void;
}

const SubmitPost: React.FC<Props> = (props) => {
  function submit() {
    props.postMutation({
      variables: {
        userId: props.userId,
        username: props.username,
        text: props.text,
      },
    });
  }

  return <button onClick={() => submit()}>Submit</button>;
};

export default compose(graphql(postMutation, { name: "postMutation" }))(
  SubmitPost
);
