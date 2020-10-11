import React, { useState, useEffect } from "react";
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
  const [comments, setComments] = useState();

  useEffect(() => {
    props.comments.sort(function (a, b) {
      return a.timestamp - b.timestamp;
    });
    setComments(props.comments);
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  function returnRender() {
    if (comments) {
      return (
        <div>
          {comments.map((el: any) => (
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
    } else return null;
  }

  return <div>{returnRender()}</div>;
};

export default PostComments;
