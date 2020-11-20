import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentNestMutation } from "../queries/queries";

interface Props {
  postId: string;
  commentId: string;
  text: string;
  pushCommentNestMutation: (variables: object) => any;
}

const SubmitSubResponse: React.FC<Props> = (props) => {
  function submit() {
    let token = sessionStorage.getItem("Token");
    props
      .pushCommentNestMutation({
        variables: {
          token: token,
          postId: props.postId,
          commentId: props.commentId,
          text: props.text,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => console.log(res));
  }

  return (
    <div>
      <button onClick={() => submit()}>submit</button>
    </div>
  );
};

export default compose(
  graphql(pushCommentNestMutation, { name: "pushCommentNestMutation" })
)(SubmitSubResponse);
