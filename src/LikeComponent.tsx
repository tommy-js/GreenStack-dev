import React, { useState } from "react";

interface Props {
  likes: number;
  dislikes: number;
}

const LikeComponent: React.FC<Props> = (props) => {
  const [likeRatio, setLikeRatio] = useState(props.likes);
  const [dislikeRatio, setDislikeRatio] = useState(props.dislikes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  function likeButton() {
    if (liked === false) {
      setLikeRatio(likeRatio + 1);
      if (disliked === true) {
        setDislikeRatio(dislikeRatio - 1);
      }
      setLiked(true);
    } else if (liked === true) {
      setLikeRatio(likeRatio - 1);
      setLiked(false);
      setDisliked(false);
    }
    // PUSH CURRENT LIKE/DISLIKE RATIO TO MONGO
  }

  function dislikeButton() {
    if (disliked === false) {
      setDislikeRatio(dislikeRatio + 1);
      if (liked === true) {
        setLikeRatio(likeRatio - 1);
      }
      setDisliked(true);
    } else if (disliked === true) {
      setDislikeRatio(dislikeRatio - 1);
      setDisliked(false);
      setLiked(false);
    }
    // PUSH CURRENT LIKE/DISLIKE RATIO TO MONGO
  }

  return (
    <div>
      <p>
        {likeRatio} / {dislikeRatio}
      </p>
      <button onClick={() => likeButton()}>Like</button>
      <button onClick={() => dislikeButton()}>Dislike</button>
    </div>
  );
};

export default LikeComponent;
