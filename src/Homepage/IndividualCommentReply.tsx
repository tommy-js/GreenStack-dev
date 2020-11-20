import React, { useState } from "react";
import SubmitSubResponse from "../resolvers/SubmitSubResponse";

const IndividualCommentReply: React.FC = () => {
  const [replying, setReplying] = useState(false);

  function renderResponseBox() {
    if (replying === true) {
      return (
        <div>
          <textarea />
          <SubmitSubResponse />
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
