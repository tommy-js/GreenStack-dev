import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { postMutation } from "../../queries/queries.js";
import { taggedUsers } from "./index";

interface Props {
  money: any;
  text: string;
  accompaniedURL: string;
  buttonTitle: string;
  allowComments: boolean;
  allowLikes: boolean;
  image: string;
  postMutation: (variables: object) => any;
  unsuccessfulEvent: () => void;
  successfulEvent: () => void;
}

const PostPortfolioValueMutation: React.FC<Props> = (props) => {
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
            title: `My portfolio is worth ${props.money}`,
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

export const PostPortfolioValue = compose(
  graphql(postMutation, { name: "postMutation" })
)(PostPortfolioValueMutation);
