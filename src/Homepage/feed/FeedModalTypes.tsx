import React from "react";
import { InputPost, InputStock } from "../CommentInput";
import CommentSection from "../CommentSection";
import { NavLink, Link } from "react-router-dom";
import { browserHist } from "../../AppMain/history.js";

interface Props {
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
        likes: {props.likes}, dislikes: {props.dislikes}, shares:{" "}
        {props.replies}
      </p>
      <p>{props.text}</p>
      <InputPost postId={props.postId} />
      <CommentSection comments={props.comments} />
    </div>
  );
};
