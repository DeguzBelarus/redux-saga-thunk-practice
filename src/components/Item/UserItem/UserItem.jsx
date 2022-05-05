import React from "react";
import "./UserItem.scss";

export const UserItem = ({ userData }) => {
  return (
    <div className="user-item-wrapper">
      <span>{userData.name}</span>
    </div>
  );
};
