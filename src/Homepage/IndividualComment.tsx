import React, { useState } from "react";
import LikePostComment from "../resolvers/LikePostComment";
import DislikePostComment from "../resolvers/DislikePostComment";

interface Props {
  postId: string;
  commentId: string;
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

const IndividualComment: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  function likeIncrement() {
    let like = Number(likes);
    like++;
    setLikes(like);
  }

  function dislikeIncrement() {
    let dislike = Number(dislikes);
    dislike++;
    setDislikes(dislike);
  }

  return (
    <div className="comment">
      <p className="comment_name">{props.username}</p>
      <p className="comment_time">posted at {props.timestamp}</p>
      <p className="comment_text">{props.text}</p>
      <p className="comment_information">
        {likes}
        <LikePostComment
          postId={props.postId}
          commentId={props.commentId}
          modLikes={likeIncrement}
        />
        , {dislikes}{" "}
        <DislikePostComment
          postId={props.postId}
          commentId={props.commentId}
          modDislikes={dislikeIncrement}
        />
        ,
      </p>
    </div>
  );
};

export default IndividualComment;
