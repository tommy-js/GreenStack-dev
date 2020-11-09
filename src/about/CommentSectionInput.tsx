import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentTutorialMutation } from "../queries/queries";

interface Props {
  id: string;
  successfulPost: () => void;
  pushCommentTutorialMutation: (variables: object) => any;
}

const CommentSectionInput: React.FC<Props> = (props) => {
  const [text, setText] = useState("");

  console.log("CommentSectionInput:");
  console.log(text);
  console.log(props.id);

  function passData() {
    let token = sessionStorage.getItem("Token");
    if (text.length > 0) {
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
          setText("");
        });
    }
  }

  return (
    <div id="comment_section_input">
      <textarea
        id="comment_section_textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="comment_section_button" onClick={() => passData()}>
        Submit
      </button>
    </div>
  );
};

export default compose(
  graphql(pushCommentTutorialMutation, { name: "pushCommentTutorialMutation" })
)(CommentSectionInput);
