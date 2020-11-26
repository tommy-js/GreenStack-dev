import React, { useState } from "react";
import { FollowerCheck } from "../FollowerCheck/FollowerCheck";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { savePreferredCommentaryMutation } from "../../queries/queries.js";

interface Props {
  id: number;
  nextPage: (id: number) => void;
  backPage: (id: number) => void;
  savePreferredCommentaryMutation: (variables: object) => any;
}

interface Submission extends Props {
  submit: () => void;
}

const RenderPageThreeMutation: React.FC<Submission> = (props) => {
  const [index, setIndex] = useState(0);

  function setCurrentIndex(index: number) {
    setIndex(index);
  }

  function save() {
    let token = sessionStorage.getItem("Token");
    props
      .savePreferredCommentaryMutation({
        variables: {
          token: token,
          commentaryStyle: index,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        console.log(res);
        props.submit();
      });
  }

  return (
    <React.Fragment>
      <p className="user_init_questions">
        What kind of commentary are you looking for from those you follow?
      </p>
      <FollowerCheck setCurrentIndex={setCurrentIndex} />
      <div className="render_pages_button_container">
        <button
          className="render_button_left"
          onClick={() => props.backPage(props.id)}
        >
          Back
        </button>
        <button className="render_button_right" onClick={() => save()}>
          Save
        </button>
      </div>
    </React.Fragment>
  );
};

export const RenderPageThree = compose(
  graphql(savePreferredCommentaryMutation, {
    name: "savePreferredCommentaryMutation",
  })
)(RenderPageThreeMutation);
