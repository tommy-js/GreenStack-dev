import React, { useState } from "react";

interface Props {
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

const IndividualComment: React.FC<Props> = (props) => {
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
    <div id="comment">
      <p id="comment_name">{props.username} </p>
      <p id="comment_time">posted at {props.timestamp}</p>
      <p id="comment_text">{props.text}</p>
      <p id="comment_information">
        {likes} <div onClick={() => like()}>upvote</div>, {dislikes}{" "}
        <div onClick={() => dislike()}>downvote</div>,
      </p>
    </div>
  );
};

export default IndividualComment;
