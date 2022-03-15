import React from "react";
import "./Review.scss";
import ReviewSlideItem from "./ReviewSlideItem.js";

const ReviewListSlide = ({ data = [] }) => (
  <div className="Review-slide-area">
    {data.map(({ id, name, areaDong, review, reviewContent, nickname }) => (
      <ReviewSlideItem key={id} name={name} areaDong={areaDong} review={review} reviewContent={reviewContent} nickname={nickname}/>
    ))}
  </div>
);

export default ReviewListSlide;
