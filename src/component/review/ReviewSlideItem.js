import "./ReviewSlideItem.css";
import star from "../../image/star.png";

function ReviewSlideItem() {
  return (
    <div className="Review-Item">
      <div className="Item-header">
        <div className="Item-header-name">맛집 이름</div>
        <div className="Item-header-star">
          <div><img src={star} className="star" alt="star" /></div>
          <div>5.0</div>
        </div>
      </div>
      <div className="Item-body">
        <div className="Item-area">OO동</div>
        <div className="Item-content">
          <p>리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다... </p>
        </div>
      </div>
      <div className="Item-nickname">닉네임</div>
    </div>
  );
}

export default ReviewSlideItem;
