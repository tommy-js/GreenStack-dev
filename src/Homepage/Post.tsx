import React, { useState, useContext } from "react";
import SubmitPost from "../resolvers/SubmitPost";
import { userContext } from "../AppMain/App";

const Post: React.FC = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { userVal } = useContext(userContext);

  function successfulEvent() {
    console.log("success");
  }

  function unsuccessfulEvent() {
    console.log("unsuccessful");
  }

  return (
    <div id="post" className="feed">
      <input
        value={title}
        placeholder="title..."
        className="post_header"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="post_textarea"
        placeholder="text..."
      />
      <div className="post_button">
        <SubmitPost
          userId={userVal.userId}
          username={userVal.username}
          title={title}
          text={text}
          successfulEvent={successfulEvent}
          unsuccessfulEvent={unsuccessfulEvent}
        />
      </div>
    </div>
  );
};

export default Post;
