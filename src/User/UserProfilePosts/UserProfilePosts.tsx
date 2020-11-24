import React from "react";
import { IndividualUserProfilePost } from "../IndividualUserProfilePost/IndividualUserProfilePost";
import { PostItem } from "../../types/types";

interface Props {
  posts: PostItem[];
}

export const UserProfilePosts: React.FC<Props> = (props) => {
  return (
    <div>
      {props.posts.map((el: PostItem) => (
        <IndividualUserProfilePost post={el} />
      ))}
    </div>
  );
};
