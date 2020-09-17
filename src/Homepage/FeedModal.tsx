import React from "react";
import { Link } from "react-router-dom";

const FeedModal: React.FC = () => {
  console.log("modal");
  return (
    <div id="modal">
      <div id="central_modal">
        <h2>test</h2>
      </div>
      <Link to="/">
        <div id="feed_modal"></div>
      </Link>
    </div>
  );
};

export default FeedModal;
