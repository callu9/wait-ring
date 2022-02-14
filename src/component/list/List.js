import React from "react";
import "./List.css";

import star from "../../image/star.png";

const List = ({ imageUrl, name, areaDong, review }) => (
  <div className="List-area">
    <div className="List-Item">
      <img src={imageUrl} className="ListItem-image" alt="store-img" />
      <div className="ListItem-name">{name}</div>
      <div className="ListItem-foot">
        <div className="ListItem-area">{areaDong}</div>
        <div className="ListItem-star">
          <img src={star} className="star" alt="star" />
          <p>{review}</p>
        </div>
      </div>
    </div>
  </div>
);

export default List;
