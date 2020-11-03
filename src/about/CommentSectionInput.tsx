import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentTutorialMutation } from "../queries/queries";

interface Props {
  id: string;
  pushCommentTutorialMutation: (variables: object) => any;
}

const CommentSectionInput: React.FC<Props> = (props) => {
  const [text, setText] = useState("");

  console.log("CommentSectionInput:");
  console.log(text);
  console.log(props.id);

  function passData() {
    let token = sessionStorage.getItem("Token");
    props
      .pushCommentTutorialMutation({
        variables: {
          token: token,
          text: text,
          id: props.id,
        },
      })
      .catch((err: any) => {
        console.log(err);
      })
      .then((res: any) => {
        console.log(res);
      });
  }

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => passData()}>Submit</button>
    </div>
  );
};

export default compose(
  graphql(pushCommentTutorialMutation, { name: "pushCommentTutorialMutation" })
)(CommentSectionInput);