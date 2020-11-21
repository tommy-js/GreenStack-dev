import React from "react";
import SubComment from "./SubComment";

type SubComments = {
  postId: string;
  commentId: string;
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  commentUsername: string;
  commentUserId: string;
  parentCommentId: string;
};

interface Props {
  subComments: SubComments[];
}

const IndividualCommentSubComments: React.FC<Props> = (props) => {
  return (
    <div>
      {props.subComments.map((el: any) => (
        <SubComment
          username={el.username}
          postId={el.postId}
          commentId={el.commentId}
          parentCommentId={el.parentCommentId}
          text={el.text}
          likes={el.likes}
          dislikes={el.dislikes}
        />
      ))}
    </div>
  );
};

export default IndividualCommentSubComments;
