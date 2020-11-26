import React, { useEffect, useState } from "react";
import { UserSearchReturn } from "../UserSearchReturn/UserSearchReturn";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowingItem, FollowerItem } from "../../types/types";

interface Redux {
  following: FollowingItem[];
  followers: FollowerItem[];
}

interface Props extends Redux {
  text: string;
  updateText: (input: string) => void;
}

const PostTextInputRender: React.FC<Props> = (props) => {
  const [searchUp, setSearchUp] = useState(false);
  const [userSplice, setUserSplice] = useState("");
  const [start, setStart] = useState();
  const [userList, setUserList] = useState([] as any);

  function injectUsername(username: string) {
    let splitText = props.text.slice(0, start);
    let text = splitText + username;
    props.updateText(text);
    setSearchUp(false);
  }

  function dropRender() {
    setSearchUp(false);
  }

  function returnUserSearchup() {
    if (searchUp === true) {
      return (
        <UserSearchReturn
          splice={userSplice}
          userList={userList}
          injectUsername={injectUsername}
          dropRender={dropRender}
        />
      );
    } else return null;
  }

  useEffect(() => {
    let arr = [...props.following, ...props.followers];
    setUserList(arr);
  }, []);

  useEffect(() => {
    let prevChar = props.text[props.text.length - 1];
    if (props.text.length === 0) setSearchUp(false);
    if (prevChar === "@") {
      let initial = props.text.length;
      setStart(initial);
      setSearchUp(true);
    }
    if (prevChar === " ") {
      setUserSplice("");
      setSearchUp(false);
    } else {
      let cut = props.text.slice(start, props.text.length);
      setUserSplice(cut);
    }
  }, [props.text]);

  return (
    <React.Fragment>
      <textarea
        onChange={(e) => props.updateText(e.target.value)}
        value={props.text}
        className="post_textarea"
        placeholder="text..."
      />
      {returnUserSearchup()}
    </React.Fragment>
  );
};

export const PostTextInput = connect(mapStateToProps)(PostTextInputRender);
