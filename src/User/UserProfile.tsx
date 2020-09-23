import React, { useEffect } from "react";

interface Props {
  userId: number;
}

const UserProfile: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log("rendering user profile");
  }, []);

  return (
    <div key={props.userId} className="feed">
      <h1>user</h1>
      <p>{props.userId}</p>
    </div>
  );
};

export default UserProfile;
