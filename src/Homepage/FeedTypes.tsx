import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  title: string;
  userId: number;
  user: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  replies: number;
  id: number;
}

interface News {
  headline: string;
  ticker: string;
  name: string;
  subtext: string;
  id: number;
}

interface Comment {
  user: string;
  text: string;
  userId: number;
  timestamp: number;
  likes: number;
  dislikes: number;
  replies: number;
  id: number;
}

export const PostType: React.FC<Post> = (props) => {
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
      <Link className="feed_link" to={`/post/${props.id}`}>
        <h2>{props.title}</h2>
        <h4>
          Posted by {props.user}
          at {props.timestamp}
        </h4>
      </Link>
      <p>
        {likes} <div onClick={() => like()}>upvote</div>, {dislikes}{" "}
        <div onClick={() => dislike()}>downvote</div>, shares: {props.replies}
      </p>
      <p>{props.text}</p>
    </div>
  );
};

export const NewsType: React.FC<News> = (props) => {
  return (
    <Link className="feed_link" to={`/post/${props.id}`}>
      <div>
        <h2>
          {props.name} #{props.ticker}
        </h2>
        <h2>{props.headline}</h2>
        <p>{props.subtext}</p>
      </div>
    </Link>
  );
};

export const CommentType: React.FC<Comment> = (props) => {
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
      <Link className="feed_link" to={`/post/${props.id}`}>
        <h3>{props.user}</h3>
        <p>{props.text}</p>
        <p>{props.timestamp}</p>
      </Link>
      <p>
        {likes} <div onClick={() => like()}>upvote</div>, {dislikes}{" "}
        <div onClick={() => dislike()}>downvote</div>, shares: {props.replies}
      </p>
    </div>
  );
};
