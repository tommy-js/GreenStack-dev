import React from "react";

interface Post {
  title: string;
}

interface News {
  title: string;
}

interface Comment {
  user: string;
}

export const PostType: React.FC<Post> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

export const NewsType: React.FC<News> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

export const CommentType: React.FC<Comment> = (props) => {
  return (
    <div>
      <h3>{props.user}</h3>
    </div>
  );
};
