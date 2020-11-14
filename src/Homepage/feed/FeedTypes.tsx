import React, { useState, useEffect } from "react";
import LikePost from "../../resolvers/LikePost";
import DislikePost from "../../resolvers/DislikePost";
import InlineUnfollow from "../../resolvers/InlineUnfollow";
import comment from "../../images/comment.png";
import { returnDate } from "../../notifications/notificationsTimestamp";

interface Props {
  title: string;
  userId: string;
  profileImage: string;
  postImage: string;
  user: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  comments: any;
  postId: string;
  allowComments: boolean;
  allowLikes: boolean;
  modPostLoad: (postId: string) => void;
}

export const RenderModal: React.FC<Props> = (props) => {
  const [over, setOver] = useState(false);
  const [styledOpac, setStyledOpac] = useState(0);

  function returnAllowed() {
    if (props.allowLikes === true) {
      return (
        <div>
          <div className="post_values">
            <span className="post_value_inner">{props.likes}</span>
          </div>
          <LikePost userId={props.userId} postId={props.postId} />
          <div className="post_values">
            <span className="post_value_inner">{props.dislikes}</span>
          </div>
          <DislikePost userId={props.userId} postId={props.postId} />
          <div className="post_values">
            <span className="post_value_inner">{props.comments.length}</span>
          </div>
          <div className="like_button_block">
            <img className="like_button_image" src={comment} />
          </div>
        </div>
      );
    } else return null;
  }

  useEffect(() => {
    if (over === true) {
      setStyledOpac(1);
    } else setStyledOpac(0);
  }, [over]);

  function returnImage() {
    if (props.postImage == "null") {
      return null;
    } else {
      return <img src={props.postImage} />;
    }
  }

  return (
    <div>
      <img src={props.profileImage} />
      {returnImage()}
      <div
        className="feed_link_header"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <h3 className="feed_link_name">{props.user}</h3>
        <div style={{ opacity: styledOpac }} className="feed_link_unfollow">
          <InlineUnfollow followerId={props.userId} />
        </div>
      </div>
      <div
        className="feed_link"
        onClick={() => props.modPostLoad(props.postId)}
      >
        <p>{props.text}</p>
        {returnAllowed()}
        <p>Posted {returnDate(props.timestamp)}</p>
      </div>
    </div>
  );
};
