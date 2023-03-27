import React from "react";
import Stars from "../Stars";

const Reviews = ({ reviews = {} }) => {
  return (
    <div className="Store-Review-List">
      {reviews.map((item) => (
        <div key={item.id} className="Store-Review-Item">
          <div className="Store-Review-Star">
            <Stars review={item.review} />
            <p className="Store-Review-Star-Review">
              <strong>{item.review}</strong>
            </p>
          </div>
          <p className="Store-Review-Etc">
            {item.nickname} | {item.timestamp}
          </p>
          <p className="Store-Review-Content">{item.reviewContent}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
