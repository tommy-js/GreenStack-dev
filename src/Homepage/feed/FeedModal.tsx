import React from "react";
import { RenderModal } from "./FeedModalTypes";

interface Props {
  data: any;
  modPostLoad: (postId: string) => void;
}

const FeedModal: React.FC<Props> = (props) => {
  console.log("feed modal data: ");
  console.log(props.data);
  return (
    <div id="modal">
      <div id="central_modal">
        <RenderModal
          title={props.data.title}
          postId={props.data.postId}
          profileImage={props.data.profileImage}
          postImage={props.data.postImage}
          userId={props.data.userId}
          user={props.data.username}
          text={props.data.text}
          timestamp={props.data.timestamp}
          likes={props.data.likes}
          dislikes={props.data.dislikes}
          comments={props.data.comments}
          allowComments={props.data.allowComments}
          allowLikes={props.data.allowLikes}
        />
      </div>
      <div
        id="feed_modal"
        onClick={() => props.modPostLoad(props.data.postId)}
      ></div>
    </div>
  );
};

export default FeedModal;
