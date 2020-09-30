import React, { useEffect, useContext } from "react";
import FollowingElement from "./FollowingElement";
import { userContext } from "../AppMain/App";

interface Array {
  userId: string;
}

interface Props {
  modRoutes: (arr: Array[]) => void;
}

const Following: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const data = userVal.followers;

  // Creates routes within the Homepage component for all the users in our Following list
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push({ userId: data[i].userId });
    }
    props.modRoutes(arr);
  }, []);

  return (
    <div className="feed">
      <h2 className="list_header">Following({data.length})</h2>
      <div>
        {data.map((el: any) => (
          <FollowingElement
            userId={el.userId}
            username={el.username}
            descriptor={el.descriptor}
          />
        ))}
      </div>
    </div>
  );
};

export default Following;
