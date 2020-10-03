import React from "react";
import IndividualPostComment from "./IndividualPostComment";

interface Props {
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

const PostComments: React.FC<Props> = (props) => {
  return (
    <div>
      {props.comments.map((el: any) => (
        <IndividualPostComment
          userId={el.userId}
          username={el.username}
          commentId={el.commentId}
          timestamp={el.timestamp}
          text={el.text}
          likes={el.likes}
          dislikes={el.dislikes}
        />
      ))}
    </div>
  );
};

export default PostComments;
