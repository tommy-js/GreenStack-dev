import React, { useState, useContext } from "react";
import SubmitPost from "../resolvers/SubmitPost";
import PostNotifIcon from "./PostNotifIcon";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  userId: any;
  username: string;
  setToFeed: (
    title: string,
    text: string,
    username: string,
    timestamp: number
  ) => void;
}

const Post: React.FC<Redux> = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  const [posted, setPosted] = useState(false);

  function successfulEvent(
    title: string,
    text: string,
    username: string,
    timestamp: number
  ) {
    setTitle("");
    setText("");
    setSuccess(true);
    setPosted(true);
    props.setToFeed(title, text, username, timestamp);
  }

  function unsuccessfulEvent() {
    console.log("unsuccessful");
    setSuccess(false);
    setPosted(true);
  }

  function timeoutFunc() {
    setPosted(false);
    setSuccess(false);
  }

  function returnPass() {
    if (posted === true) {
      return (
        <div>
          <PostNotifIcon timeoutFunc={timeoutFunc} success={success} />
        </div>
      );
    } else return null;
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
          username={props.username}
          title={title}
          text={text}
          buttonTitle="Post"
          successfulEvent={successfulEvent}
          unsuccessfulEvent={unsuccessfulEvent}
          accompaniedURL=""
        />
      </div>
      {returnPass()}
    </div>
  );
};

export default connect(mapStateToProps)(Post);
