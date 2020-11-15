import React, { useState } from "react";
import { InputPost } from "../CommentInput";
import CommentSection from "../CommentSection";
import LikePost from "../../resolvers/LikePost";
import DislikePost from "../../resolvers/DislikePost";
import { Link } from "react-router-dom";
import comment from "../../images/comment.png";
import { returnDate } from "../../notifications/notificationsTimestamp";

interface Props {
  title: string;
  userId: string;
  profileImage: string;
  postImage: string;
  postId: string;
  user: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  allowComments: boolean;
  allowLikes: boolean;
  comments: {
    commentId: string;
    username: string;
    text: string;
    timestamp: number;
    likes: number;
    dislikes: number;
  }[];
}

export const RenderModal: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);
  const [comments, setComments] = useState(props.comments.length);

  function returnImage() {
    if (props.postImage == "null") {
      return null;
    } else {
      return <img src={props.postImage} />;
    }
  }

  function modLikes() {
    setLikes(likes + 1);
  }

  function modDislikes() {
    setDislikes(dislikes + 1);
  }

  function modComments() {
    setComments(comments + 1);
  }

  function returnAllowed() {
    if (props.allowLikes === true) {
      return (
        <div>
          <p>
            <div className="post_values">
              <span className="post_value_inner">{likes}</span>
            </div>
            <LikePost
              userId={props.userId}
              postId={props.postId}
              modLikes={modLikes}
            />
            <div className="post_values">
              <span className="post_value_inner">{dislikes}</span>
            </div>
            <DislikePost
              userId={props.userId}
              postId={props.postId}
              modDislikes={modDislikes}
            />
            <div className="post_values">
              <span className="post_value_inner">{comments}</span>
            </div>
            <div className="like_button_block">
              <img className="like_button_image" src={comment} />
            </div>
          </p>
        </div>
      );
    } else return null;
  }

  return (
    <div id="render_modal">
      <div className="post_upper_block">
        <h2>{props.title}</h2>
        <Link className="feed_link" to={`/home/user/${props.userId}`}>
          <div className="feed_profile_image_block">
            <img className="feed_profile_image" src={props.profileImage} />
          </div>
          <h3 className="feed_link_name">{props.user}</h3>
        </Link>

        {returnImage()}
        <p className="post_text">{props.text}</p>
      </div>
      <div className="post_lower_block">
        <p className="post_return_date">Posted {returnDate(props.timestamp)}</p>
        {returnAllowed()}
        <InputPost
          userId={props.userId}
          postId={props.postId}
          modComments={modComments}
          allowComments={props.allowComments}
        />
        <CommentSection postId={props.postId} comments={props.comments} />
      </div>
    </div>
  );
};
