import "./ListSlideItem.css";
import main from "../../image/main.png";
import star from "../../image/star.png";

function SlideItem() {
  return (
    <div className="ListItem-area">
      <img src={main} className="ListItem-image" alt="temp" />
      <div className="ListItem-name">맛집 이름</div>
      <div className="ListItem-foot">
        <div className="ListItem-area">OO동</div>
        <div className="ListItem-star">
          <div><img src={star} className="star" alt="star" /></div>
          <div>5.0</div>
        </div>
      </div>
    </div>
  );
}

export default SlideItem;
