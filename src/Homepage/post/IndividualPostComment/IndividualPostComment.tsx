import React, { useState } from "react";
import { LikePostComment } from "../LikePostComment/LikePostComment";
import { DislikePostComment } from "../DislikePostComment/DislikePostComment";
import { returnDate } from "./index";

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

export const IndividualPostComment: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  return (
    <div className="individual_post_comment">
      <p className="individual_post_comment_username">{props.username}</p>
      <p className="individual_post_comment_text">{props.text}</p>
      <p className="individual_post_comment_date">
        Posted {returnDate(props.timestamp)}
      </p>
      <div className="individual_post_comment_option_block">
        <p className="individual_post_comment_likes">likes{likes}</p>
        <LikePostComment
          postId={props.postId}
          commentId={props.commentId}
          modLikes={() => setLikes(likes + 1)}
        />
        <p className="individual_post_comment_likes">{dislikes}</p>
        <DislikePostComment
          postId={props.postId}
          commentId={props.commentId}
          modDislikes={() => setDislikes(dislikes + 1)}
        />
      </div>
    </div>
  );
};
