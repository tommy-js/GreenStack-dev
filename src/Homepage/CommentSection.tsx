import React, { useState, useEffect } from "react";
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
  const [comments, setComments] = useState();

  useEffect(() => {
    props.comments.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    setComments(props.comments);
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  function returnRender() {
    if (comments) {
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
    } else return null;
  }

  return <div>{returnRender()}</div>;
};

export default CommentSection;
