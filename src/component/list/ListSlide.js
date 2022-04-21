import React from "react";
import "./List.scss";
import SlideItem from "./ListSlideItem.js";

const Slide = ({ data = [] }) => (
  <div className="Slide-area">
    {data.map(({ id, name, imageUrl, areaDong, review }) => (
      <SlideItem
        key={id}
        id={(id>=2)?2:1}
        name={name}
        areaDong={areaDong}
        review={review}
        imageUrl={imageUrl}
      />
    ))}
  </div>
);
export default Slide;
