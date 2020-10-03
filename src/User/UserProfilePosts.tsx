import React from "react";
import IndividualUserProfilePost from "./IndividualUserProfilePost";

interface Props {
  posts: {
    postId: string;
  }[];
}

const UserProfilePosts: React.FC<Props> = (props) => {
  return (
    <div>
      {props.posts.map((el: any) => (
        <IndividualUserProfilePost postId={el.postId} />
      ))}
    </div>
  );
};

export default UserProfilePosts;
