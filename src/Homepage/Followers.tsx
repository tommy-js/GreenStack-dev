import React, { useEffect, useContext } from "react";
import FollowerElement from "./FollowerElement";
import { userContext } from "../AppMain/App";

interface Props {
  modRoutes: (arr: any) => void;
}

const Followers: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const data = userVal.followers;

  // Creates routes within the Homepage component for all the users in our Followers list
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].userId);
    }
    props.modRoutes(arr);
  }, []);

  return (
    <div className="feed">
      <h2 className="list_header">Your Followers({data.length})</h2>
      <div>
        {data.map((el: any) => (
          <FollowerElement
            key={el.userId}
            userId={el.userId}
            username={el.username}
            descriptor={el.descriptor}
          />
        ))}
      </div>
    </div>
  );
};

export default Followers;
