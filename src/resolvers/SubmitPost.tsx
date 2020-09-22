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
    let currentTime = Math.floor(Date.now() / 1000);
    let randomNum = Math.floor(Math.random() * 1000000);
    props
      .postMutation({
        variables: {
          userId: props.userId,
          postId: randomNum,
          username: props.username,
          title: props.title,
          text: props.text,
          likes: 0,
          dislikes: 0,
          timestamp: currentTime,
        },
      })
      .catch((res: any) => props.unsuccessfulEvent())
      .then((res: any) => props.successfulEvent());
  }

  return <button onClick={() => submit()}>Submit</button>;
};

export default compose(graphql(postMutation, { name: "postMutation" }))(
  SubmitPost
);
