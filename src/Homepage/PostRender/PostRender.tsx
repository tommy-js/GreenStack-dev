import React, { useState } from "react";
import { SubmitPost } from "../SubmitPost/SubmitPost";
import { PostNotifIcon } from "../PostNotifIcon/PostNotifIcon";
import { PostOptions } from "../post/PostOptions/PostOptions";
import { PostTextInput } from "../PostTextInput/PostTextInput";
import { ProfileDropzone } from "../profile/ProfileDropzone/ProfileDropzone";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import settings from "../../images/settings.png";

interface Redux {
  userId: string;
  username: string;
  setToFeed: (
    title: string,
    text: string,
    username: string,
    timestamp: number
  ) => void;
}

const PostRenderPre: React.FC<Redux> = (props) => {
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
      return <PostNotifIcon timeoutFunc={timeoutFunc} success={success} />;
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
    setText(input);
  }

  return (
    <div id="post" className="post_container">
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
  );
};

export const PostRender = connect(mapStateToProps)(PostRenderPre);
