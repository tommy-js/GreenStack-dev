import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
  updateDarkModeMutation,
  updateInvisibleMutation,
  updateAllowCommentsMutation,
} from "../../queries/queries.js";

interface Props {
  darkmode: boolean;
  allowCommentsOnPosts: boolean;
  invisible: boolean;
  modDarkMode: (darkmode: boolean) => void;
  modPrivate: (invisible: boolean) => void;
  modAllowComments: (allowCommentsOnPosts: boolean) => void;
  updateAllowCommentsMutation: (variables: object) => any;
  updateDarkModeMutation: (variables: object) => any;
  updateInvisibleMutation: (variables: object) => any;
}

const UserSettingsMutations: React.FC<Props> = (props) => {
  const [darkmodeChecked, setDarkmodeChecked] = useState(props.darkmode);
  const [invisibleChecked, setInvisibleChecked] = useState(props.invisible);
  const [allowChecked, setAllowChecked] = useState(props.allowCommentsOnPosts);

  useEffect(() => {
    setAllowChecked(props.allowCommentsOnPosts);
  }, [props.allowCommentsOnPosts]);

  function updateAllowComments() {
    let token = sessionStorage.getItem("Token");
    props
      .updateAllowCommentsMutation({
        variables: {
          token: token,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setAllowChecked(!allowChecked);
        props.modAllowComments(!allowChecked);
        console.log(res);
      });
  }

  useEffect(() => {
    setInvisibleChecked(props.invisible);
  }, [props.invisible]);

  function updateInvisible() {
    let token = sessionStorage.getItem("Token");
    props
      .updateInvisibleMutation({
        variables: {
          token: token,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setInvisibleChecked(!invisibleChecked);
        props.modPrivate(!invisibleChecked);
        console.log(res);
      });
  }

  useEffect(() => {
    setDarkmodeChecked(props.darkmode);
  }, [props.darkmode]);

  function updateDarkMode() {
    let token = sessionStorage.getItem("Token");
    props
      .updateDarkModeMutation({
        variables: {
          token: token,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setDarkmodeChecked(!darkmodeChecked);
        props.modDarkMode(!darkmodeChecked);
      });
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={darkmodeChecked}
        onChange={() => updateDarkMode()}
      />
      <label>Dark Mode</label>

      <input
        type="checkbox"
        checked={invisibleChecked}
        onChange={() => updateInvisible()}
      />
      <label>Set Account To Private</label>

      <input
        type="checkbox"
        checked={allowChecked}
        onChange={() => updateAllowComments()}
      />
      <label>Allow Comments on Posts</label>
    </div>
  );
};

const MutateUserDarkMode = compose(
  graphql(updateDarkModeMutation, { name: "updateDarkModeMutation" })
)(UserSettingsMutations);

const MutateUserInvisible = compose(
  graphql(updateInvisibleMutation, { name: "updateInvisibleMutation" })
)(MutateUserDarkMode);

export const MutateUserSettings = compose(
  graphql(updateAllowCommentsMutation, { name: "updateAllowCommentsMutation" })
)(MutateUserInvisible);
