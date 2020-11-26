import React from "react";
import { FeedPost } from "../FeedPost/FeedPost";
import { FeedComment } from "../FeedComment/FeedComment";
import { FeedLike } from "../FeedLike/FeedLike";

interface Props {
  title: string;
  postUserId: string;
  postProfileImage: string;
  postImage: string;
  postUsername: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  comments: any;
  postId: string;
  allowComments: boolean;
  allowLikes: boolean;
  type: string;
  reference?: any;
  currentIndex: number;
  view: number;
  loadMore: (val: number) => void;
  modPostLoad: (postId: string) => void;
}

export const FeedElement: React.FC<Props> = (props) => {
  function path() {
    if (props.type === "Post") {
      return (
        <FeedPost
          title={props.title}
          text={props.text}
          postProfileImage={props.postProfileImage}
          postImage={props.postImage}
          postUserId={props.postUserId}
          postUsername={props.postUsername}
          timestamp={props.timestamp}
          likes={props.likes}
          dislikes={props.dislikes}
          comments={props.comments}
          postId={props.postId}
          allowComments={props.allowComments}
          allowLikes={props.allowLikes}
          modPostLoad={props.modPostLoad}
          currentIndex={props.currentIndex}
          loadMore={props.loadMore}
          view={props.view}
        />
      );
    } else if (props.type === "UserComment") {
      return (
        <FeedComment
          username={props.postUsername}
          profileImage={props.postProfileImage}
          text={props.text}
          reference={props.reference}
          modPostLoad={props.modPostLoad}
          currentIndex={props.currentIndex}
          loadMore={props.loadMore}
          view={props.view}
        />
      );
    } else if (props.type === "Like") {
      return (
        <FeedLike
          username={props.postUsername}
          profileImage={props.postProfileImage}
          text={props.text}
          reference={props.reference}
          modPostLoad={props.modPostLoad}
          currentIndex={props.currentIndex}
          loadMore={props.loadMore}
          view={props.view}
        />
      );
    }
  }

  return <React.Fragment>{path()}</React.Fragment>;
};
