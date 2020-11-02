import React from "react";
import { InputPost, InputStock } from "../CommentInput";
import CommentSection from "../CommentSection";
import LikePost from "../../resolvers/LikePost";
import DislikePost from "../../resolvers/DislikePost";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  userId: number;
  postId: string;
  user: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  comments: {
    commentId: string;
    username: string;
    text: string;
    timestamp: number;
    likes: number;
    dislikes: number;
  }[];
}

export const RenderModal: React.FC<Props> = (props) => {
  console.log(props.comments);
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>
        Posted by <Link to={`/home/user/${props.userId}`}>{props.user}</Link> at{" "}
        {props.timestamp}
      </h4>
      <p>
        {props.likes}, <LikePost postId={props.postId} /> {props.dislikes},{" "}
        <DislikePost postId={props.postId} /> comments: {props.comments.length}
      </p>
      <p>{props.text}</p>
      <InputPost postId={props.postId} />
      <CommentSection postId={props.postId} comments={props.comments} />
    </div>
  );
};
