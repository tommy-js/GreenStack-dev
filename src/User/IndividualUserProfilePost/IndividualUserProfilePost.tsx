import React from "react";
import { PostStatus } from "../PostStatus/PostStatus";
import { Link } from "react-router-dom";
import { PostItem } from "../../types/types";

interface Props {
  post: PostItem;
}

export const IndividualUserProfilePost: React.FC<Props> = ({ post }: Props) => {
  return (
    <div className="user_profile_post">
      <Link to={`/home/post/${post.postId}`}>
        <h2 className="user_profile_title">{post.title}</h2>
        <p className="user_profile_text">{post.text}</p>
      </Link>
      <PostStatus
        likes={post.likes}
        dislikes={post.dislikes}
        timestamp={post.timestamp}
        commentCount={post.comments.length}
      />
    </div>
  );
};
