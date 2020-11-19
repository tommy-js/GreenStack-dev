import React from "react";

type Reference = {
  postId: string;
  text: string;
};

interface Props {
  username: string;
  profileImage: string;
  text: string;
  reference: Reference;
}

const FeedComment: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="feed_comment_header">
        <div className="feed_comment_image_block">
          <img src={props.profileImage} className="feed_comment_image" />
        </div>
        <p className="feed_comment_header_username">{props.username}</p>
        <p className="feed_comment_header_text">{props.text}</p>
      </div>
      <div className="feed_comment_base">
        <span className="feed_comment_base_reference_text">
          {props.reference.text}
        </span>
      </div>
    </div>
  );
};

export default FeedComment;
