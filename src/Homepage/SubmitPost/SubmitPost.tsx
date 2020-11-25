import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { postMutation } from "../../queries/queries.js";
import { taggedUsers } from "./index";

interface Props {
  title: string;
  text: string;
  accompaniedURL: string;
  buttonTitle: string;
  allowComments: boolean;
  allowLikes: boolean;
  image: string;
  postMutation: (variables: object) => any;
  unsuccessfulEvent?: () => void;
  successfulEvent?: () => void;
}

const SubmitPostMutation: React.FC<Props> = (props) => {
  function submit() {
    if (props.text !== "") {
      let image = props.image;
      if (props.image === undefined) {
        image = "null";
      }

      let taggedArr = taggedUsers(props.text);

      props
        .postMutation({
          variables: {
            token: sessionStorage.getItem("Token"),
            title: props.title,
            text: props.text,
            historyText: "Posted",
            style: "Post",
            postImage: image,
            accompaniedURL: props.accompaniedURL,
            allowComments: props.allowComments,
            allowLikes: props.allowLikes,
            taggedUsers: taggedArr,
          },
        })
        .catch((err: any) => {
          console.log(err);
          if (props.unsuccessfulEvent) props.unsuccessfulEvent();
        })
        .then((res: any) => {
          console.log(res);
          if (props.successfulEvent) props.successfulEvent();
        });
    }
  }

  return <button onClick={() => submit()}>{props.buttonTitle}</button>;
};

export const SubmitPost = compose(
  graphql(postMutation, { name: "postMutation" })
)(SubmitPostMutation);
