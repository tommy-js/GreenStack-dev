import React from "react";
import { InputPost, InputStock } from "../CommentInput";
import CommentSection from "../CommentSection";
import LikePost from "../../resolvers/LikePost";
import DislikePost from "../../resolvers/DislikePost";
import { Link } from "react-router-dom";
import comment from "../../images/comment.png";

interface Props {
  title: string;
  userId: number;
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
  function returnAllowed() {
    if (props.allowLikes === true) {
      return (
        <div>
          <p>
            <div className="post_values">
              <span className="post_value_inner">{props.likes}</span>
            </div>
            <LikePost postId={props.postId} />
            <div className="post_values">
              <span className="post_value_inner">{props.dislikes}</span>
            </div>
            <DislikePost postId={props.postId} />
            <div className="post_values">
              <span className="post_value_inner">{props.comments.length}</span>
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
    <div>
      <h2>{props.title}</h2>
      <h4>
        Posted by <Link to={`/home/user/${props.userId}`}>{props.user}</Link> at{" "}
        {props.timestamp}
      </h4>
      {returnAllowed()}
      <p>{props.text}</p>
      <InputPost postId={props.postId} allowComments={props.allowComments} />
      <CommentSection postId={props.postId} comments={props.comments} />
    </div>
  );
};
