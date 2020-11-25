import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentPostMutation } from "../queries/queries.js";
import { taggedUsers } from "../globals/functions/returnTaggedUsers";

interface Props {
  userId: string;
  postId: string;
  text: string;
  modComments: () => void;
  pushCommentPostMutation: (variables: object) => any;
}

const PushCommentPost: React.FC<Props> = (props) => {
  function submitComment() {
    if (props.text.length < 180 && props.text.length > 0) {
      let token = sessionStorage.getItem("Token");

      let taggedArr = taggedUsers(props.text);

      props
        .pushCommentPostMutation({
          variables: {
            token: token,
            userId: props.userId,
            content: "A user commented on your post",
            postId: props.postId,
            text: props.text,
            taggedUsers: taggedArr,
          },
        })
        .catch((err: any) => {
          console.log(err);
        })
        .then((res: any) => {
          console.log(res);
          props.modComments();
        });
    }
  }

  return <button onClick={() => submitComment()}>Submit</button>;
};

export default compose(
  graphql(pushCommentPostMutation, { name: "pushCommentPostMutation" })
)(PushCommentPost);
