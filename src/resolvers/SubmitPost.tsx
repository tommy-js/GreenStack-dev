import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { postMutation } from "../queries/queries.js";

interface Props {
  title: string;
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

const SubmitPost: React.FC<Props> = (props) => {
  function submit() {
    if (props.text !== "") {
      let token = sessionStorage.getItem("Token");
      console.log("Post image: ");
      console.log(props.image);
      let image = props.image;
      if (props.image === undefined) {
        image = "null";
      }

      let taggedArr = [];
      if (props.text.includes("@")) {
        let indexArr = [];
        for (let i = 0; i < props.text.length; i++) {
          if (props.text[i] === "@") indexArr.push(i);
        }
        for (let j = 0; j < indexArr.length; j++) {
          let lastInd = props.text.indexOf(" ", indexArr[j]);
          let splicedArr = props.text.substring(j, lastInd);
          taggedArr.push(splicedArr);
        }
        console.log(taggedArr);
      }

      props
        .postMutation({
          variables: {
            token: token,
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
