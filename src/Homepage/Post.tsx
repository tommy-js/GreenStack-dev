import React, { useState } from "react";
import SubmitPost from "../resolvers/SubmitPost";

const Post: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <div id="post" className="feed">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="post_textarea"
        placeholder="type..."
      />
      <div className="post_button">
        <SubmitPost />
      </div>
    </div>
  );
};

export default Post;
