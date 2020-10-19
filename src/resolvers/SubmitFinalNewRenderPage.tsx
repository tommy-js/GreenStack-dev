import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { savePreferredCommentaryMutation } from "../queries/queries.js";

interface Props {
  text: string;
  index: number;
  savePreferredCommentaryMutation: (variables: object) => any;
  submit: () => void;
}

const SubmitFinalNewRenderPage: React.FC<Props> = (props) => {
  function save() {
    props
      .savePreferredCommentaryMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
          commentaryStyle: props.index,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        console.log(res);
        props.submit();
      });
  }

  return (
    <button className="render_button_right" onClick={() => save()}>
      {props.text}
    </button>
  );
};

export default compose(
  graphql(savePreferredCommentaryMutation, {
    name: "savePreferredCommentaryMutation",
  })
)(SubmitFinalNewRenderPage);
