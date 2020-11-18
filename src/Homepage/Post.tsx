import React, { useState, useContext } from "react";
import SubmitPost from "../resolvers/SubmitPost";
import PostNotifIcon from "./PostNotifIcon";
import PostOptions from "./post/PostOptions";
import PostTextInput from "./PostTextInput";
import { ProfileDropzone } from "./profile/ProfileDropzone";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";
import settings from "../images/settings.png";

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
  const [allowComments, setAllowComments] = useState(true);
  const [allowLikes, setAllowLikes] = useState(true);
  const [optionHeight, setOptionHeight] = useState("0");
  const [maxHeightOptions, setMaxHeightOptions] = useState(false);

  const [image, setImage] = useState();

  function successfulEvent() {
    setTitle("");
    setText("");
    setSuccess(true);
    setPosted(true);
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

  function modAllowComments() {
    setAllowComments(!allowComments);
  }

  function modAllowLikes() {
    setAllowLikes(!allowLikes);
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

  function modifyImg(imgData: any) {
    setImage(imgData);
  }

  function modSettingsHeight() {
    if (maxHeightOptions === true) {
      setOptionHeight("0");
      setMaxHeightOptions(false);
    } else {
      setOptionHeight("25px");
      setMaxHeightOptions(true);
    }
  }

  function updateText(input: string) {
    console.log("updateText: ");
    console.log(input);
    setText(input);
  }

  return (
    <div className="post_container">
      <div id="post">
        <input
          value={title}
          placeholder="title..."
          className="post_header"
          onChange={(e) => setTitle(e.target.value)}
        />
        <PostTextInput text={text} updateText={updateText} />
        <div id="post_settings_icon" onClick={() => modSettingsHeight()}>
          <img id="post_settings_img" src={settings} />
        </div>
        <PostOptions
          allowComments={allowComments}
          allowLikes={allowLikes}
          optionHeight={optionHeight}
          modAllowComments={modAllowComments}
          modAllowLikes={modAllowLikes}
        />
        <ProfileDropzone modifyImg={modifyImg} />
        <div className="post_button">
          <SubmitPost
            username={props.username}
            title={title}
            text={text}
            buttonTitle="Post"
            successfulEvent={successfulEvent}
            unsuccessfulEvent={unsuccessfulEvent}
            allowComments={allowComments}
            allowLikes={allowLikes}
            accompaniedURL=""
            image={image}
          />
        </div>
        {returnPass()}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Post);
