import React, { useState, useContext } from "react";
import SubmitPost from "../resolvers/SubmitPost";
import { userContext } from "../AppMain/App";

const Post: React.FC = () => {
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
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="post_textarea"
        placeholder="type..."
      />
      <div className="post_button">
        <SubmitPost
          userId={userVal.userId}
          username={userVal.username}
          text={text}
          successfulEvent={successfulEvent}
          unsuccessfulEvent={unsuccessfulEvent}
        />
      </div>
    </div>
  );
};

export default Post;
