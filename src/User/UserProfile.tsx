import React from "react";

interface Props {
  userId: number;
}

const UserProfile: React.FC<Props> = (props) => {
  return (
    <div className="feed">
      <h1>user</h1>
      <p>{props.userId}</p>
    </div>
  );
};

export default UserProfile;
