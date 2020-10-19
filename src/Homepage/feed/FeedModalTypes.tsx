import React from "react";
import { InputPost, InputStock } from "../CommentInput";
import CommentSection from "../CommentSection";
import { NavLink, Link } from "react-router-dom";
import { browserHist } from "../../AppMain/history.js";

interface Post {
  title: string;
  userId: number;
  postId: string;
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
  stockId: string;
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
      <InputPost postId={props.postId} />
      <CommentSection comments={props.comments} />
    </div>
  );
};

export const NewsType: React.FC<News> = (props) => {
  function link() {
    browserHist.push(`/home/stock/${props.stockId}`);
  }

  return (
    <div>
      <h2 onClick={() => link()}>
        {props.name} #{props.ticker}
      </h2>
      <h2>{props.headline}</h2>
      <p>{props.subtext}</p>
      <InputStock stockId={props.stockId} />
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
      <CommentSection comments={props.comments} />
    </div>
  );
};
