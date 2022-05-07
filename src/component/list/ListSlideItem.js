import React from "react";
import star from "../../image/star.png";

function movePage(id) {
  document.location.pathname = "store/" + id;
}

const ListSlideItem = ({ id, name, imageUrl, areaDong, review }) => (
  <>
    <div onClick={() => movePage(id)}>
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
    </div>
  </>
);

export default ListSlideItem;
