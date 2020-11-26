import React, { useEffect } from "react";
import likeFilled from "../../../images/like_filled.png";

type Reference = {
  postId: string;
  text: string;
  username: string;
  profileImage: string;
};

interface Props {
  username: string;
  profileImage: string;
  text: string;
  reference: Reference;
  currentIndex: number;
  view: number;
  loadMore: (val: number) => void;
  modPostLoad: (postId: string) => void;
}

export const FeedLike: React.FC<Props> = (props) => {
  useEffect(() => {
    let postElement = document.getElementById(`id_${props.reference.postId}`);
    if (postElement) {
      const rect = postElement.getBoundingClientRect();
      if (rect.top >= 0) props.loadMore(props.currentIndex);
    }
  }, [props.view]);

  return (
    <div className="feed_comment_header">
      <div
        className="feed_comment_base"
        onClick={() => props.modPostLoad(props.reference.postId)}
      >
        <div className="posted_by_info">
          <div className="feed_comment_image_block">
            <img
              src={props.reference.profileImage}
              className="feed_comment_image"
            />
          </div>
          <p className="posted_by_username">{props.reference.username}</p>
        </div>
        <span className="feed_comment_base_reference_text">
          {props.reference.text}
        </span>
      </div>
      <div className="feed_top_block">
        <div className="feed_comment_image_block">
          <img src={props.profileImage} className="feed_comment_image" />
        </div>
        <p className="feed_comment_header_username">{props.username}</p>
      </div>
      <div className="liked_image_block">
        <img src={likeFilled} className="liked_image" />
      </div>
      <p className="feed_comment_header_text">{props.text}</p>
    </div>
  );
};
