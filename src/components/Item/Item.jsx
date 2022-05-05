import React from "react";
import "./Item.scss";

export const Item = ({ text, id, removeItem }) => {
  return (
    <div className="item-wrapper">
      <span>{text}</span>
      <button onClick={() => removeItem(id)}>X</button>
    </div>
  );
};
