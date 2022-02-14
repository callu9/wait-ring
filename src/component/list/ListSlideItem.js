import React from "react";
import "./ListSlideItem.css";

import star from "../../image/star.png";

function makeNameShort(name) {
  return name.substring(0, 5)+"...";
};

const ListSlideItem = ({name, imageUrl, areaDong, review}) => (
  <>
      <div className="ListItem-area">
        <img src={imageUrl} className="ListItem-image" alt="temp" />
        <div className="ListItem-name">{makeNameShort(name)}</div>
        <div className="ListItem-foot">
          <div className="ListItem-area">{areaDong}</div>
          <div className="ListItem-star">
            <img src={star} className="star" alt="star" />
            <p>{review}</p>
          </div>
        </div>
      </div>
  </>
);

export default ListSlideItem;
