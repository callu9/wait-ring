import "./ReviewListSlide.css";
import ReviewSlideItem from "./ReviewSlideItem.js"

function ReviewSlide() {
    return (
    <div className="Review-slide-area">
        <ReviewSlideItem />
        <ReviewSlideItem />
        <ReviewSlideItem />
    </div>
);
}

export default ReviewSlide;