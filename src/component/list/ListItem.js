import React from "react";
import { Link } from "react-router-dom";
import star from "../../image/star.png";

const ListItem = ({ id, name, areaDong, imageUrl, review, keyword }) => (
  <div className="ListItem-area">
    <Link
      to={"/store/" + id}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <div className="ListItem-image-area-112">
        <img src={imageUrl} className="ListItem-image-1x1" alt="store-img" />
      </div>
      <div className="ListItem-name-112">{name}</div>
    </Link>
    <div className="ListItem-foot">
      <div className="ListItem-area">{areaDong}</div>
      <div className="ListItem-star">
        <img src={star} className="star" alt="star" />
        <p>{review}</p>
      </div>
    </div>
    <div className="keyword-area">
      {keyword.map((k, index) => (
        <div key={index} className="keyword">
          <span>#</span>
          <span className="keyword-content">{k}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ListItem;
