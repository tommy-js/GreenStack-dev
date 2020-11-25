import React from "react";

interface Props {
  allowComments: boolean;
  allowLikes: boolean;
  optionHeight: string;
  modAllowComments: () => void;
  modAllowLikes: () => void;
}

export const PostOptions: React.FC<Props> = (props) => {
  return (
    <div id="post_options" style={{ height: props.optionHeight }}>
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
