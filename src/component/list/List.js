import React from "react";
import ListItem from "./ListItem.js";
import "./List.scss"

const List = ({ data = [] }) => (
  <div className="List-area">
    {data.map(({ id, name, imageUrl, areaDong, review }) => (
      <ListItem
        key={id}
        name={name}
        areaDong={areaDong}
        review={review}
        imageUrl={imageUrl}
      />
    ))}
  </div>
);
export default List;
