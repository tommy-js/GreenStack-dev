import React from "react";
import IndividualComment from "./IndividualComment";

interface Props {
  comments: {
    username: string;
    text: string;
    timestamp: number;
    likes: number;
    dislikes: number;
  }[];
}

const CommentSection: React.FC<Props> = (props) => {
  return (
    <div id="comment_section">
      {props.comments.map((el: any) => (
        <IndividualComment
          key={el.timestamp}
          username={el.username}
          text={el.text}
          timestamp={el.timestamp}
          likes={el.likes}
          dislikes={el.dislikes}
        />
      ))}
    </div>
  );
};

export default CommentSection;
