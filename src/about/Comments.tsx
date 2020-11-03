import React from "react";
import IndividualComment from "./IndividualComment";

interface Props {
  comments: any;
}

const Comments: React.FC<Props> = (props) => {
  function conditionalCommentRender() {
    if (props.comments.length > 0) {
      return (
        <div>
          {props.comments.map((el: any) => (
            <IndividualComment
              username={el.username}
              text={el.text}
              timestamp={el.timestamp}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h3>Apparently nothing... Yet!</h3>
        </div>
      );
    }
  }

  return (
    <div>
      <h3>What do others think?</h3>
      {conditionalCommentRender()}
    </div>
  );
};

export default Comments;
