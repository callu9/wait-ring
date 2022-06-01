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

  const Reviews = ({ reviews = {} }) => {
    return (
      <tbody>
        {reviews.map((item) => (
          <tr key={item.id}>
            <td className="Store-Review-Item">
              <div className="Store-Review-Name" onClick={() => movePage(item.storeId)}>
                {item.storeName}
              </div>
              <div className="Store-Review-Star">
                <Stars review={item.review} />
                <div className="Store-Review-Star-Review">
                  <strong>{item.review}</strong>
                </div>
              </div>
              <div className="Store-Review-Etc">
                {item.nickname} | {item.timestamp}
              </div>
              <div className="Store-Review-Content">{item.reviewContent}</div>
              {item.imageUrl !== undefined && (
                <div className="Store-Review-Image" onClick={() => changeModalFlag(item.imageUrl)}>
                  <img src={item.imageUrl} alt="review-attached" />
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  const EtcReviews = () => {
    if (reviews.length > 0)
      return (
        <div className="MyWait-Body-Content-Table">
          <table>
            <Reviews reviews={reviews} />
          </table>
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
    <>
      <ModalPhoto
        className="ModalPhoto"
        imageUrl={imageUrl}
        modalFlag={modalFlag}
        func={setModalFlag}
      />
      <div className="Etc-Review">
        <div className="Exit">
          <img src={exit} alt="Exit-Icon" onClick={() => navigate(-1)} />
        </div>
        <div className="Header">
          <div>리뷰 내역</div>
          <div className="FontSmall">작성한 리뷰 내역을 확인하세요!</div>
        </div>
        <EtcReviews />
      </div>
    </>
  );
}
