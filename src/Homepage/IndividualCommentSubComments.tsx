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
};

interface Props {
  subComments: SubComments[];
}

const IndividualCommentSubComments: React.FC<Props> = (props) => {
  function renderSubComments() {
    if (props.subComments) {
      return (
        <div>
          {props.subComments.map((el: any) => (
            <SubComment text={el.text} />
          ))}
        </div>
      );
    } else return null;
  }

  return <div>{renderSubComments()}</div>;
};

export default IndividualCommentSubComments;
