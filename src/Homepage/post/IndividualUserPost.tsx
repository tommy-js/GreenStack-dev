import React from "react";
import { Link } from "react-router-dom";

interface Props {
  postId: string;
  title: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

const IndividualUserPost: React.FC<Props> = (props) => {
  return (
    <Link to={`/home/post/${props.postId}`}>
      <div className="homepage_block_component">
        <h2 className="individual_user_post_title">{props.title}</h2>
        <p className="individual_user_post_textblock">{props.text}</p>
        <div className="individual_user_post_infoblock">
          <p className="individual_user_post_inline">{props.timestamp}</p>
          <p className="individual_user_post_inline">likes: {props.likes}</p>
          <p className="individual_user_post_inline">
            dislikes: {props.dislikes}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default IndividualUserPost;
