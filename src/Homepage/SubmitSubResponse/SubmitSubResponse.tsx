import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentNestMutation } from "../../queries/queries";

interface Props {
  postId: string;
  commentId: string;
  text: string;
  pushCommentNestMutation: (variables: object) => any;
}

const SubmitSubResponseMutation: React.FC<Props> = (props) => {
  function submit() {
    props
      .pushCommentNestMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
          postId: props.postId,
          commentId: props.commentId,
          text: props.text,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => console.log(res));
  }

  return <button onClick={() => submit()}>submit</button>;
};

export const SubmitSubResponse = compose(
  graphql(pushCommentNestMutation, { name: "pushCommentNestMutation" })
)(SubmitSubResponseMutation);
