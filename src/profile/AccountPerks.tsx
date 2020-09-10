import React from "react";

export const FreeAccount: React.FC = () => {
  return (
    <div className="account_status_component">
      <h2 className="account_status_header">Free Account</h2>
      <ul>
        <li>Lessons and progress saving</li>
        <li>Interactive tutorials</li>
        <li>Following, followers, comments and posts</li>
      </ul>
    </div>
  );
};

export const PaidAccount: React.FC = () => {
  return (
    <div className="account_status_component">
      <h2 className="account_status_header">Paid Account</h2>
      <ul>
        <li>Lessons and progress saving</li>
        <li>Interactive tutorials</li>
        <li>Following, followers, comments and posts</li>
      </ul>
    </div>
  );
};
