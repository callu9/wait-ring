import React from "react";
import ListItem from "./ListItem.js";
import "./List.scss";

const List = ({ data = [] }) => (
  <div className="List-area">
    {data.map((item) => (
      <ListItem
        key={item.id}
        id={item.id}
        name={item.name}
        areaDong={item.areaDong}
        review={item.review}
        imageUrl={item.imageUrl}
        keyword={item.keyword}
      />
    ))}
  </div>
);
export default List;
