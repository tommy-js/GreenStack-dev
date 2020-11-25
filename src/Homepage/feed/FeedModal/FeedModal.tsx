import React from "react";
import { RenderModal } from "../RenderModal/RenderModal";

interface Props {
  data: any;
  modPostLoad: (postId: string) => void;
}

export const FeedModal: React.FC<Props> = (props) => {
  return (
    <div id="modal">
      <div id="central_modal">
        <RenderModal
          title={props.data.title}
          postId={props.data.postId}
          userProfileImage={props.data.profileImage}
          postImage={props.data.postImage}
          postUserId={props.data.userId}
          postUsername={props.data.username}
          text={props.data.text}
          timestamp={props.data.timestamp}
          likes={props.data.likes}
          dislikes={props.data.dislikes}
          comments={props.data.comments}
          allowComments={props.data.allowComments}
          allowLikes={props.data.allowLikes}
          modPostLoad={props.modPostLoad}
        />
      </div>
      <div
        id="feed_modal"
        onClick={() => props.modPostLoad(props.data.postId)}
      ></div>
    </div>
  );
};
