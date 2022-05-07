import React from "react";
import star from "../../image/star.png";

function movePage(id) {
  document.location.pathname = "store/" + id;
}
const ListItem = ({ id, name, areaDong, imageUrl, review, keyword }) => (
  <>
    <div className="ListItem-area" onClick={() => movePage(id)}>
      <div className="ListItem-image-area-112">
        <img src={imageUrl} className="ListItem-image-1x1" alt="store-img" />
      </div>
      <div className="ListItem-name-112">{name}</div>
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
  </>
);

export default ListItem;
