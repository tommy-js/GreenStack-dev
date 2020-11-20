import React, { useState } from "react";
import SubmitSubResponse from "../resolvers/SubmitSubResponse";

interface Props {
  postId: string;
  commentId: string;
}

const IndividualCommentReply: React.FC<Props> = (props) => {
  const [replying, setReplying] = useState(false);
  const [text, setText] = useState("");

  function renderResponseBox() {
    if (replying === true) {
      return (
        <div className="submit_sub_response_textarea_block">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="submit_sub_response_textarea"
          />
          <SubmitSubResponse
            postId={props.postId}
            commentId={props.commentId}
            text={text}
          />
        </div>
      );
    } else return null;
  }

  return (
    <div>
      <button onClick={() => setReplying(!replying)}>Reply</button>
      {renderResponseBox()}
    </div>
  );
};

export default IndividualCommentReply;
