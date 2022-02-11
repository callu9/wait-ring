import './Main.css';
import notice from "../../image/notice-none.png"
import map from "../../image/location-logout.png"
import ListSlide from '../../component/list/ListSlide.js'
import ReviewListSlide from '../../component/review/ReviewListSlide.js'

function Main() {
  return (
    <div className="Main">
      <div className="Alarm">
        <p className="Alarm-icon-area">
          <img src={notice} alt="Notice" />
        </p>
      </div>
      <div className="Header">
        <div>쉽고 빠른 원격 웨이팅,</div>
        <div className='FontOrange'>웨이링</div>
      </div>
      <div className="Body">
        <div className="Best-area">
          <div>인기 웨이팅 맛집</div>
          <div className="Item-list-slide">
            <ListSlide />
          </div>
        </div>
        <div className="Location-area">
          <div>내 주변 웨이팅 맛집</div>
          <div className="Map">
            <img src={map} alt="temp" />
          </div>
        </div>
        <div className="Review-area">
          <div>최근 작성된 리뷰</div>
          <div className="Review-list-slide">
            <ReviewListSlide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;