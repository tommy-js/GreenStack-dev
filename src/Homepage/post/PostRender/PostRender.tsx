import React from "react";
import { PostTitle } from "../PostTitle/PostTitle";
import { PostText } from "../PostText/PostText";
import { PostInformation } from "../PostInformation/PostInformation";
import { PostComments } from "../PostComments/PostComments";
import { CommentInputPost } from "../../CommentInputPost/CommentInputPost";

interface Data {
  title: string;
  text: string;
  userId: string;
  likes: number;
  dislikes: number;
  timestamp: number;
  postId: string;
  accompaniedURL: string;
  allowComments: boolean;
  allowLikes: boolean;
  comments: {
    userId: string;
    username: string;
    commentId: string;
    timestamp: number;
    text: string;
    likes: number;
    dislikes: number;
  }[];
}

interface Props {
  info: Data;
}

export const PostRender: React.FC<Props> = ({ info }: Props) => {
  return (
    <div className="feed">
      <PostTitle title={info.title} />
      <PostText text={info.text} />
      <PostInformation
        likes={info.likes}
        dislikes={info.dislikes}
        timestamp={info.timestamp}
      />
      <CommentInputPost
        userId={info.userId}
        postId={info.postId}
        allowComments={info.allowComments}
      />
      <PostComments postId={info.postId} comments={info.comments} />
    </div>
  );
};
