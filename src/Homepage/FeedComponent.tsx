import React from "react";

interface Props {
  typeId: number;
}

const FeedComponent: React.FC<Props> = (props) => {
  function returnDataType() {
    if (props.typeId === 0) {
      return (
        <div>
          <h2>Post</h2>
        </div>
      );
    } else if (props.typeId === 1) {
      return (
        <div>
          <h2>Stock News</h2>
        </div>
      );
    } else if (props.typeId === 2) {
      return (
        <div>
          <h2>Liked Comment</h2>
        </div>
      );
    }
  }

  return <div>{returnDataType()}</div>;
};

export default FeedComponent;
