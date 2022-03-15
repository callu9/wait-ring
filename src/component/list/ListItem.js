import React from "react";
import star from "../../image/star.png";

function makeNameShort(name) {
  return name.substring(0, 5) + "...";
}

const ListItem = ({ imageUrl, name, areaDong, review }) => (
  <>
    <div className="ListItem-area">
        <div className="ListItem-image-area-112">
          <img src={imageUrl} className="ListItem-image-1x1" alt="store-img" />
        </div>
        <div className="ListItem-name">{makeNameShort(name)}</div>
        <div className="ListItem-foot">
          <div className="ListItem-area">{areaDong}</div>
          <div className="ListItem-star">
            <img src={star} className="star" alt="star" />
            <p>{review}</p>
          </div>
        </div>
        <div className="keyword-area">
          <div className="keyword">#키워드</div>
          <div className="keyword">#키워드</div>
        </div>
    </div>
  </>
);

export default ListItem;
