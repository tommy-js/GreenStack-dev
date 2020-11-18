import React, { useEffect, useState } from "react";
import { UserSearchReturn } from "./UserSearchReturn";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  following: any;
  followers: any;
}

interface Props extends Redux {
  text: string;
  updateText: (input: string) => void;
}

const PostTextInput: React.FC<Props> = (props) => {
  const [searchUp, setSearchUp] = useState(false);
  const [userSplice, setUserSplice] = useState("");
  const [start, setStart] = useState();
  const [userList, setUserList] = useState([] as any);

  function injectUsername(username: string) {
    let splitText = props.text.slice(0, start);
    let text = splitText + username;
    props.updateText(text);
  }

  function returnUserSearchup() {
    if (searchUp === true) {
      return (
        <UserSearchReturn
          splice={userSplice}
          userList={userList}
          injectUsername={injectUsername}
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
    console.log(prevChar);
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
    <div>
      <textarea
        onChange={(e) => props.updateText(e.target.value)}
        value={props.text}
        className="post_textarea"
        placeholder="text..."
      />
      {returnUserSearchup()}
    </div>
  );
};

export default connect(mapStateToProps)(PostTextInput);
