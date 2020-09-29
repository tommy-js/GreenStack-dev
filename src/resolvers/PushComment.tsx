import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentMutation } from "../queries/queries.js";

interface Props {
  username: string;
  userId: string;
  text: string;
  pushCommentMutation: (variables: object) => void;
}

const PushComment: React.FC<Props> = (props) => {
  function submitComment() {
    props.pushCommentMutation({
      variables: {
        username: props.username,
        userId: props.userId,
        text: props.text,
      },
    });
    console.log("submitted!");
  }

  return <button onClick={() => submitComment()}>Submit</button>;
};

export default compose(
  graphql(pushCommentMutation, { name: "pushCommentMutation" })
)(PushComment);
