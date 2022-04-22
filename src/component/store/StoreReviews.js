import React from "react";
import Stars from "../Stars";

const Reviews = ({ reviews = {}}) => {
    return (
      <tbody>
        {reviews.map((item) => (
          <tr key={item.id}>
            <td className="Store-Review-Item">
              <div className="Store-Review-Star">
                <Stars review={item.review} />
                <div className="Store-Review-Star-Review">
                  <strong>{item.review}</strong>
                </div>
              </div>
              <div className="Store-Review-Etc">
                {item.nickname} | {item.timestamp}
              </div>
              <div className="Store-Review-Content">{item.reviewContent}</div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

export default Reviews;