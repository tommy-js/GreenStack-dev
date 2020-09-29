import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { postMutation } from "../queries/queries.js";

interface Props {
  userId: number;
  username: string;
  title: string;
  text: string;
  postMutation: (variables: object) => any;
  unsuccessfulEvent: () => void;
  successfulEvent: () => void;
}

const SubmitPost: React.FC<Props> = (props) => {
  function submit() {
    props
      .postMutation({
        variables: {
          userId: props.userId,
          username: props.username,
          title: props.title,
          text: props.text,
        },
      })
      .catch((err: any) => {
        console.log(err);
        props.unsuccessfulEvent();
      })
      .then((res: any) => {
        console.log(res);
        props.successfulEvent();
      });
  }

  return <button onClick={() => submit()}>Submit</button>;
};

export default compose(graphql(postMutation, { name: "postMutation" }))(
  SubmitPost
);
