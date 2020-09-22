import React from "react";
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
  return (
    <Link className="feed_link" to={`/post/${props.id}`}>
      <div>
        <h2>{props.title}</h2>
        <h4>
          Posted by <Link to={`/home/user/${props.userId}`}>{props.user}</Link>
          at {props.timestamp}
        </h4>
        <p>
          likes: {props.likes}, dislikes: {props.dislikes}, shares:{" "}
          {props.replies}
        </p>
        <p>{props.text}</p>
      </div>
    </Link>
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
  return (
    <Link className="feed_link" to={`/post/${props.id}`}>
      <div>
        <h3>
          <Link to={`/home/user/${props.userId}`}>{props.user}</Link>
        </h3>
        <p>{props.text}</p>
        <p>{props.timestamp}</p>
        <p>
          likes: {props.likes} dislikes: {props.dislikes} shares:{" "}
          {props.replies}
        </p>
      </div>
    </Link>
  );
};
