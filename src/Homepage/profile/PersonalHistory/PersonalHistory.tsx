import React, { useState } from "react";
import { HistoryElement } from "../HistoryElement/HistoryElement";
import { ProfileFeedRender } from "../ProfileFeedRender/ProfileFeedRender";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const PersonalHistoryRender: React.FC = () => {
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
  }

  function conditionalPostRendering() {
    if (postRendered === true)
      return <ProfileFeedRender postId={postInfo} modPostLoad={modPostLoad} />;
    else return null;
  }

  return (
    <React.Fragment>
      <h2 id="personal_history_header">History</h2>

      {conditionalPostRendering()}
    </React.Fragment>
  );
};

export const PersonalHistory = connect(mapStateToProps)(PersonalHistoryRender);
