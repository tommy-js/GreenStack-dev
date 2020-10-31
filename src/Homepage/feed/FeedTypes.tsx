import React, { useState, useEffect } from "react";
import LikePost from "../../resolvers/LikePost";
import DislikePost from "../../resolvers/DislikePost";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  userId: number;
  user: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  replies: number;
  postId: string;
}

export const RenderModal: React.FC<Props> = (props) => {
  const [stateLike] = useState(props.likes);
  const [stateDislike] = useState(props.dislikes);
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  function like() {
    let updateLike;

    if (stateDislike === dislikes) {
      if (stateLike === likes) {
        updateLike = stateLike + 1;
        setLikes(updateLike);
      } else {
        setLikes(stateLike);
      }
    } else {
      if (stateLike === likes) {
        updateLike = stateLike + 1;
        setLikes(updateLike);
        setDislikes(stateDislike);
      } else {
        setLikes(stateLike);
      }
    }
  }

  function dislike() {
    let updateDislike;

    if (stateLike === likes) {
      if (stateDislike === dislikes) {
        updateDislike = stateDislike + 1;
        setDislikes(updateDislike);
      } else {
        setDislikes(stateDislike);
      }
    } else {
      if (stateDislike === dislikes) {
        updateDislike = stateDislike + 1;
        setDislikes(updateDislike);
        setLikes(stateLike);
      } else {
        setDislikes(stateDislike);
      }
    }
  }

  return (
    <div>
      <Link className="feed_link" to={`/home/post/${props.postId}`}>
        <h3>{props.user}</h3>
        <p>{props.text}</p>
        <p>{props.timestamp}</p>
      </Link>
      <p>
        {props.likes}, <LikePost postId={props.postId} /> {props.dislikes},{" "}
        <DislikePost postId={props.postId} /> comments: {props.replies}
      </p>
    </div>
  );
};
