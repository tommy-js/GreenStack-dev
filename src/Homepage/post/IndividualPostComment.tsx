import React from "react";
import LikePostComment from "../../resolvers/LikePostComment";
import DislikePostComment from "../../resolvers/DislikePostComment";
import { returnDate } from "../../notifications/notificationsTimestamp";

interface Props {
  userId: string;
  username: string;
  commentId: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
  postId: string;
}

const IndividualPostComment: React.FC<Props> = (props) => {
  return (
    <div className="individual_post_comment">
      <p className="individual_post_comment_username">{props.username}</p>
      <p className="individual_post_comment_text">{props.text}</p>
      <p className="individual_post_comment_date">
        Posted {returnDate(props.timestamp)}
      </p>
      <div className="individual_post_comment_option_block">
        <p>{props.likes}</p>
        <LikePostComment postId={props.postId} commentId={props.commentId} />
        <p>{props.dislikes}</p>
        <DislikePostComment postId={props.postId} commentId={props.commentId} />
      </div>
    </div>
  );
};

export default IndividualPostComment;
