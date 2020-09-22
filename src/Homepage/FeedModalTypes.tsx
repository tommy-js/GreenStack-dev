import React from "react";
import CommentInput from "./CommentInput";
import CommentSection from "./CommentSection";
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
  comments: {
    username: string;
    text: string;
    timestamp: number;
    likes: number;
    dislikes: number;
  }[];
}

interface News {
  headline: string;
  ticker: string;
  name: string;
  subtext: string;
  comments: {
    username: string;
    text: string;
    timestamp: number;
    likes: number;
    dislikes: number;
  }[];
}

interface Comment {
  user: string;
  userId: number;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  replies: number;
  comments: {
    username: string;
    text: string;
    timestamp: number;
    likes: number;
    dislikes: number;
  }[];
}

export const PostType: React.FC<Post> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>
        Posted by <Link to={`/home/user/${props.userId}`}>{props.user}</Link> at{" "}
        {props.timestamp}
      </h4>
      <p>
        likes: {props.likes}, dislikes: {props.dislikes}, shares:{" "}
        {props.replies}
      </p>
      <p>{props.text}</p>
      <CommentInput />
      <CommentSection comments={props.comments} />
    </div>
  );
};

export const NewsType: React.FC<News> = (props) => {
  return (
    <div>
      <h2>
        {props.name} #{props.ticker}
      </h2>
      <h2>{props.headline}</h2>
      <p>{props.subtext}</p>
      <CommentInput />
      <CommentSection comments={props.comments} />
    </div>
  );
};

export const CommentType: React.FC<Comment> = (props) => {
  return (
    <div>
      <h3>
        <Link to={`/home/user/${props.userId}`}>{props.user}</Link>
      </h3>
      <p>{props.text}</p>
      <p>{props.timestamp}</p>
      <p>
        likes: {props.likes} dislikes: {props.dislikes} shares: {props.replies}
      </p>
      <CommentInput />
      <CommentSection comments={props.comments} />
    </div>
  );
};
