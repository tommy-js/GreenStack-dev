import React from "react";
import { SubComment } from "../SubComment/SubComment";
import { SubCommentItem } from "../../types/types";

interface Props {
  postId: string;
  transferedDisp: string;
  subComments: SubCommentItem[];
}

export const IndividualCommentSubComments: React.FC<Props> = ({
  postId,
  subComments,
  transferedDisp,
}: Props) => {
  return (
    <div style={{ display: transferedDisp }}>
      {subComments.map((el: SubCommentItem) => (
        <SubComment
          username={el.username}
          postId={postId}
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
