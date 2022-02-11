import './ListSlide.css';
import SlideItem from "./ListSlideItem.js"

function Slide() {
    return (
        <div className="Slide-area">
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
        </div>
    );
}

export default Slide;