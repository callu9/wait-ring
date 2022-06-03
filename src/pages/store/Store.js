import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Store.scss";

import ModalPhoto from "../../component/modal/ModalPhoto";
import Alert from "../../component/Alert";

import Stars from "../../component/Stars";
import Menus from "../../component/store/StoreMenus";
import Reviews from "../../component/store/StoreReviews";
import Tab from "../../component/store/StoreTab";
import exit from "../../image/exit.png";
import liked from "../../image/liked-full.png";

import storage from "../../storage.js";

function Store(props) {
  const params = useLocation().pathname;
  const id = params.split("/")[2];
  const storeDetail = storage.storeDetail[id - 1];

  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);
  const [modalFlag, setModalFlag] = useState(false);
  const changeModalFlag = function (image) {
    setImageUrl(image);
    setModalFlag(true);
  };
  
  const [alertFg, setAlertFg] = useState(false);
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  function copyText(txt) {
    setAlertFg(true);
    navigator.clipboard.writeText(txt);
    sleep(3000).then(() => setAlertFg(false));
  }

  return (
    <div className="Store">
      <ModalPhoto imageUrl={imageUrl} modalFlag={modalFlag} func={setModalFlag} />
      <div className="Store-Header-Area">
        <div className="Exit">
          <img src={exit} alt="Exit-Icon" onClick={() => navigate(-1)} />
        </div>
        <div className="Store-Header-Detail">
          <div className="Store-Header-Detail-Left">
            <div className="Store-name">{storeDetail.name}</div>
            <div className="Store-location" onClick={()=>copyText(storeDetail.areaDetail)}>
              {storeDetail.areaDetail} ({storeDetail.areaDong})
            </div>
            {alertFg && <Alert className="alert" />}
            <div className="Store-reviews">
              <Stars review={storeDetail.review} />
              <div>
                <strong>{storeDetail.review}</strong> ({storeDetail.reviewNum})
              </div>
            </div>
          </div>
          <div className="Store-Header-Detail-Right">
            <div className="Store-liked">
              <div>
                <img src={liked} alt="store-liked" />
              </div>
              <div>{storeDetail.liked}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Store-Detail-Area">
        <div className="Header">매장 정보</div>
        <table>
          <tbody>
            <tr>
              <td>운영시간</td>
              <td>
                {storeDetail.openTime} ~ {storeDetail.closeTime}
              </td>
            </tr>
            <tr>
              <td>휴무일</td>
              <td>{storeDetail.closeDay}</td>
            </tr>
          </tbody>
        </table>
        <div className="Store-Detail-Image">
          {storeDetail.images.map((image, i) => (
            <div key={i} className="ListItem-Slide">
              <div className="ListItem-image-area" onClick={() => changeModalFlag(image)}>
                <img src={image} alt="store-detail" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Store-Menu-Area">
        <div className="Header">대표 메뉴</div>
        <table>
          <Menus menus={storeDetail.menus} />
        </table>
        <div className="More">
          <div>메뉴 더보기 ＞</div>
        </div>
      </div>
      <div className="Store-Review-Area">
        <div className="Header">리뷰</div>
        <table>
          <Reviews reviews={storeDetail.reviews} />
        </table>
        <div className="More">
          <div>리뷰 더보기 ＞</div>
        </div>
      </div>
      <Tab wait={storeDetail.waitingFlag} reserve={storeDetail.reservationFlag}  />
    </div>
  );
}

export default Store;
