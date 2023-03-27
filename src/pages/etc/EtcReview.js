import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Etc.scss";
import storage from "../../storage.js";
import Stars from "../../component/Stars";
import ModalPhoto from "../../component/modal/ModalPhoto";

import exit from "../../image/exit.png";

export default function EtcMyWait(props) {
  const reviews = storage.EtcReviewDetail;

  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);
  const [modalFlag, setModalFlag] = useState(false);
  const changeModalFlag = function (image) {
    setImageUrl(image);
    setModalFlag(true);
  };

  function movePage(path) {
    navigate("/store/" + path);
  }

  const EtcReviews = () => {
    if (reviews.length > 0)
      return (
        <div className="MyWait-Body-Content-Table">
          {reviews.map((item) => (
            <div key={item.id} className="Store-Review-Item">
              <div className="Store-Review-Name">
                <p onClick={() => movePage(item.storeId)}>{item.storeName}</p>
                <img
                  src={exit}
                  alt="Exit-Icon"
                  onClick={() => movePage(item.storeId)}
                />
              </div>
              <div className="Store-Review-Star">
                <Stars review={item.review} />
                <p className="Store-Review-Star-Review">
                  <strong>{item.review}</strong>
                </p>
              </div>
              <p className="Store-Review-Etc">
                {item.nickname} | {item.timestamp}
              </p>
              <p className="Store-Review-Content">{item.reviewContent}</p>
              {item.imageUrl !== undefined && (
                <div
                  className="Store-Review-Image"
                  onClick={() => changeModalFlag(item.imageUrl)}
                >
                  <img src={item.imageUrl} alt="review-attached" />
                </div>
              )}
            </div>
          ))}
        </div>
      );
    else
      return (
        <div className="MyWait-Body-Content">
          <div className="MyWait-Body-None">리뷰 작성 내역이 없습니다</div>
        </div>
      );
  };

  return (
    <div className="Etc-Review">
      <ModalPhoto
        className="ModalPhoto"
        imageUrl={imageUrl}
        modalFlag={modalFlag}
        func={setModalFlag}
      />
      <div className="Exit">
        <img src={exit} alt="Exit-Icon" onClick={() => navigate(-1)} />
      </div>
      <div className="Header">
        <div>리뷰 내역</div>
        <div className="FontSmall">작성한 리뷰 내역을 확인하세요!</div>
      </div>
      <EtcReviews />
    </div>
  );
}
