import React from "react";

interface Props {
  allowComments: boolean;
  allowLikes: boolean;
  modAllowComments: () => void;
  modAllowLikes: () => void;
}

const PostOptions: React.FC<Props> = (props) => {
  return (
    <div>
      <label>Allow Comments</label>
      <input
        type="checkbox"
        onClick={() => props.modAllowComments()}
        checked={props.allowComments}
      />
      <label>Allow Likes</label>
      <input
        type="checkbox"
        onClick={() => props.modAllowLikes()}
        checked={props.allowLikes}
      />
    </div>
  );
};

export default PostOptions;
