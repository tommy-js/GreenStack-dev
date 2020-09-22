import React from "react";
import { PostType, NewsType, CommentType } from "./FeedModalTypes";
import { Link } from "react-router-dom";

interface Props {
  data: any;
  typeId: number;
}

const FeedModal: React.FC<Props> = (props) => {
  function renderModal() {
    if (props.typeId === 0) {
      return (
        <div>
          <PostType
            title={props.data.title}
            userId={props.data.userId}
            user={props.data.user}
            text={props.data.text}
            timestamp={props.data.timestamp}
            likes={props.data.likes}
            dislikes={props.data.dislikes}
            replies={props.data.replies}
            comments={props.data.comments}
          />
        </div>
      );
    } else if (props.typeId === 1) {
      return (
        <div>
          <NewsType
            headline={props.data.headline}
            ticker={props.data.ticker}
            name={props.data.name}
            subtext={props.data.subtext}
            comments={props.data.comments}
          />
        </div>
      );
    } else if (props.typeId === 2) {
      return (
        <div>
          <CommentType
            userId={props.data.userId}
            user={props.data.user}
            text={props.data.text}
            timestamp={props.data.timestamp}
            likes={props.data.likes}
            dislikes={props.data.dislikes}
            replies={props.data.replies}
            comments={props.data.comments}
          />
        </div>
      );
    }
  }

  return (
    <div id="modal">
      <div id="central_modal">{renderModal()}</div>
      <Link to="/home">
        <div id="feed_modal"></div>
      </Link>
    </div>
  );
};

export default FeedModal;
