import React from "react";
import "./ReviewSlideItem.css";
import star from "../../image/star.png";

function makeNameShort(name) {
  return name.substring(0, 6)+"...";
};

function makeContentShort(content) {
  return content.substring(0, 25)+"...";
};

const ReviewSlideItem = ({name, areaDong, review, reviewContent, nickname}) => (
  <>
    <div className="Review-Item" >
      <div className="Item-header">
        <div className="Item-header-name">{makeNameShort(name)}</div>
        <div className="Item-header-star">
          <div>
            <img src={star} className="star" alt="star" />
          </div>
          <div>{review}</div>
        </div>
      </div>
      <div className="Item-body">
        <div className="Item-area">{areaDong}</div>
        <div className="Item-content">
          <p>{makeContentShort(reviewContent)}</p>
        </div>
      </div>
      <div className="Item-nickname">{nickname}</div>
    </div>
  </>
  );

export default ReviewSlideItem;
