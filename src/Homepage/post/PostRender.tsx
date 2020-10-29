import React from "react";
import PostTitle from "./PostTitle";
import PostText from "./PostText";
import PostInformation from "./PostInformation";
import PostComments from "./PostComments";
import { InputPost } from "../CommentInput";

interface Data {
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  timestamp: number;
  postId: string;
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
  return (
    <div className="feed">
      <PostTitle title={info.title} />
      <PostText text={info.text} />
      <PostInformation
        likes={info.likes}
        dislikes={info.dislikes}
        timestamp={info.timestamp}
      />
      <InputPost postId={info.postId} />
      <PostComments comments={info.comments} />
    </div>
  );
};

export default PostRender;
