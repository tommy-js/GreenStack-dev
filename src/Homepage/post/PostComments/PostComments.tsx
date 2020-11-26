import React, { useState, useEffect } from "react";
import { IndividualPostComment } from "../IndividualPostComment/IndividualPostComment";
import { LoadingGeneral } from "../../../login/Loading/Loading";
import { returnOrderedComments } from "./index";

type Comment = {
  userId: string;
  username: string;
  commentId: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
};

interface Props {
  postId: string;
  comments: Comment[];
}

export const PostComments: React.FC<Props> = (props) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    if (props.comments) {
      let orderedComments = returnOrderedComments(props.comments);
      setComments(orderedComments);
    }
  }, []);

  function returnRender() {
    if (comments) {
      return (
        <React.Fragment>
          {comments.map((el: Comment) => (
            <IndividualPostComment
              userId={el.userId}
              username={el.username}
              commentId={el.commentId}
              timestamp={el.timestamp}
              text={el.text}
              likes={el.likes}
              dislikes={el.dislikes}
              postId={props.postId}
            />
          ))}
        </React.Fragment>
      );
    } else return <LoadingGeneral />;
  }

  return <React.Fragment>{returnRender()}</React.Fragment>;
};
