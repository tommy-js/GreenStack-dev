import React from "react";
import PostTitle from "./PostTitle";
import PostText from "./PostText";
import PostInformation from "./PostInformation";
import PostComments from "./PostComments";
import { InputPost } from "../CommentInput";

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

const PostRender: React.FC<Props> = ({ info }: Props) => {
  function modComments() {}
  return (
    <div className="feed">
      <PostTitle title={info.title} />
      <PostText text={info.text} />
      <PostInformation
        likes={info.likes}
        dislikes={info.dislikes}
        timestamp={info.timestamp}
      />
      <InputPost
        userId={info.userId}
        postId={info.postId}
        modComments={modComments}
        allowComments={info.allowComments}
      />
      <PostComments postId={info.postId} comments={info.comments} />
    </div>
  );
};

export default PostRender;
