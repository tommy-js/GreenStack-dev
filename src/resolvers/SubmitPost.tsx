import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { postMutation } from "../queries/queries.js";

interface Props {
  title: string;
  text: string;
  accompaniedURL: string;
  buttonTitle: string;
  postMutation: (variables: object) => any;
  unsuccessfulEvent: () => void;
  successfulEvent: () => void;
}

const SubmitPost: React.FC<Props> = (props) => {
  function submit() {
    if (props.text !== "") {
      let token = sessionStorage.getItem("Token");
      props
        .postMutation({
          variables: {
            token: token,
            title: props.title,
            text: props.text,
            accompaniedURL: props.accompaniedURL,
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
  }

  return <button onClick={() => submit()}>{props.buttonTitle}</button>;
};

export default compose(graphql(postMutation, { name: "postMutation" }))(
  SubmitPost
);
