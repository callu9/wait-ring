import React from "react";
import "./List.scss";

import { Link } from "react-router-dom";
import star from "../../image/star.png";

const ListSlideItem = ({ id, name, imageUrl, areaDong, review }) => (
  <>
    <Link to={"/store/" + id}>
      <div className="ListItem-area">
        <div className="ListItem-image-area-100">
          <img src={imageUrl} className="ListItem-image-1x1" alt="store-img" />
        </div>
        <div className="ListItem-name-100">{name}</div>
        <div className="ListItem-foot">
          <div className="ListItem-area">{areaDong}</div>
          <div className="ListItem-star">
            <img src={star} className="star" alt="star" />
            <p>{review}</p>
          </div>
        </div>
      </div>
    </Link>
  </>
);

export default ListSlideItem;
