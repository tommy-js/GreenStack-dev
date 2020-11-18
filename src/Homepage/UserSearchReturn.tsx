import React, { useEffect, useState } from "react";
import { returnUserList } from "../globals/functions/userList";

interface Props {
  splice: string;
  userList: any;
  injectUsername: (username: string) => void;
}

export const UserSearchReturn: React.FC<Props> = (props) => {
  const [usersRender, setUsersRender] = useState(props.userList);

  useEffect(() => {
    setUsersRender(returnUserList(props.userList, props.splice));
  }, [props.splice]);

  return (
    <div className="user_text_search_return">
      {usersRender.map((el: any) => (
        <p onClick={() => props.injectUsername(el.username)}>{el.username}</p>
      ))}
    </div>
  );
};
