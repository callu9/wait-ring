import React from "react";

import star from "../image/star.png";
import starNone from "../image/star-none.png";
import starHalf from "../image/star-half.png";

const rnum = [1, 2, 3, 4, 5];

let makeStars = (n, review) => {
  if (review / n >= 1) return star;
  else if ((n - review) % n > 0 && (n - review) % n < 1) return starHalf;
  else return starNone;
};

const Stars = ({ review = {}}) => {
  return (
    <div className="Store-Review-Star-Area">
      {rnum.map((n) => (
        <img key={n} src={makeStars(n, review)} alt="review" />
      ))}
    </div>
  );
}

export default Stars;