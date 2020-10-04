import React from "react";
import IndividualUserProfilePost from "./IndividualUserProfilePost";

interface Props {
  posts: {
    postId: string;
    title: string;
    text: string;
    likes: number;
    dislikes: number;
    timestamp: number;
    comments: any[];
  }[];
}

const UserProfilePosts: React.FC<Props> = (props) => {
  return (
    <div>
      {props.posts.map((el: any) => (
        <IndividualUserProfilePost
          postId={el.postId}
          title={el.title}
          text={el.text}
          likes={el.likes}
          dislikes={el.dislikes}
          timestamp={el.timestamp}
          commentCount={el.comments.length}
        />
      ))}
    </div>
  );
};

export default UserProfilePosts;
