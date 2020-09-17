import React from "react";

interface Post {
  title: string;
  user: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  replies: number;
}

interface News {
  headline: string;
  ticker: string;
  name: string;
  subtext: string;
}

interface Comment {
  user: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  replies: number;
}

export const PostType: React.FC<Post> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>
        Posted by {props.user} at {props.timestamp}
      </h4>
      <p>
        likes: {props.likes}, dislikes: {props.dislikes}, shares:{" "}
        {props.replies}
      </p>
      <p>{props.text}</p>
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
    </div>
  );
};

export const CommentType: React.FC<Comment> = (props) => {
  return (
    <div>
      <h3>{props.user}</h3>
      <p>{props.text}</p>
      <p>{props.timestamp}</p>
      <p>
        likes: {props.likes} dislikes: {props.dislikes} shares: {props.replies}
      </p>
    </div>
  );
};
