import React, { useEffect, useState } from "react";
import IndividualComment from "./IndividualComment";

interface Props {
  comments: any;
}

const Comments: React.FC<Props> = (props) => {
  const [comments, setComments] = useState([] as any);

  useEffect(() => {
    if (props.comments.length > 0) {
      let arr = [...props.comments];
      arr.sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });
      setComments(arr);
    }
  }, [props.comments]);

  function conditionalCommentRender() {
    if (comments.length > 0) {
      return (
        <div id="tutorial_comments">
          {comments.map((el: any) => (
            <IndividualComment
              commentUsername={el.username}
              commentUserId={el.userId}
              text={el.text}
              timestamp={el.timestamp}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div id="tutorial_comments">
          <h3>Apparently nothing... Yet!</h3>
        </div>
      );
    }
  }

  return <div>{conditionalCommentRender()}</div>;
};

export default Comments;
