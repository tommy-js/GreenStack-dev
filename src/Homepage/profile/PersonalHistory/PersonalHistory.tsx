import React, { useState } from "react";
import { HistoryElement } from "../HistoryElement/HistoryElement";
import { ProfileFeedRender } from "../ProfileFeedRender/ProfileFeedRender";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

interface Redux {
  history: any;
}

const PersonalHistoryRender: React.FC<Redux> = (props) => {
  const [postRendered, setPostRendered] = useState(false);
  const [postInfo, setPostInfo] = useState();

  function modPostLoad(postId: string) {
    const feed = document.getElementById("feed")!;
    if (postRendered === true) {
      setPostRendered(false);
      enableBodyScroll(feed);
    } else {
      setPostRendered(true);
      disableBodyScroll(feed);
    }
    triggerPostLoad(postId);
  }

  function triggerPostLoad(postId: string) {
    let foundId = props.history.find((el: any) => postId === el.postId)!;
    let foundIndex = props.history.indexOf(foundId);
    setPostInfo(props.history[foundIndex].postId);
  }

  function conditionalPostRendering() {
    if (postRendered === true)
      return <ProfileFeedRender postId={postInfo} modPostLoad={modPostLoad} />;
    else return null;
  }

  return (
    <div>
      <h2 id="personal_history_header">History</h2>
      {props.history.map((el: any) => (
        <HistoryElement
          style={el.style}
          text={el.text}
          postId={el.postId}
          timestamp={el.timestamp}
          modPostLoad={modPostLoad}
        />
      ))}
      {conditionalPostRendering()}
    </div>
  );
};

export const PersonalHistory = connect(mapStateToProps)(PersonalHistoryRender);
