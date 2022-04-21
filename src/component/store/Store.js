import React from "react";
import "./Store.scss";

import star from "../../image/star.png";
import starNone from "../../image/star-none.png";
import starHalf from "../../image/star-half.png";
import exit from "../../image/exit.png";
import liked from "../../image/liked-full.png";

import storage from "../../storage.js";

const rnum = [1, 2, 3, 4, 5];

let makeStars = (n, review) => {
  if (review / n >= 1) return star;
  else if ((n - review) % n > 0 && (n - review) % n < 1) return starHalf;
  else return starNone;
};

function Stars(review) {
  return (
    <div className="Store-Review-Star-Area">
      {rnum.map((n) => (
        <img key={n} src={makeStars(n, review)} alt="review" />
      ))}
    </div>
  );
}

function Menus(menus) {
  return (
    <tbody>
      {menus.map((item) => (
        <tr key={item.id}>
          <td className="Store-Menu-Item">
            <div className="Store-Menu-Image">
              <img src={item.imageUrl} alt="MenuImage" />
            </div>
            <div className="Store-Menu-Text">
              <div className="Store-Menu-Name">{item.name}</div>
              <div className="Store-Menu-Price">{item.price}</div>
              <div className="Store-Menu-Detail">{item.detail}</div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

function Reviews(reviews) {
  return (
    <tbody>
      {reviews.map((item) => (
        <tr key={item.id}>
          <td className="Store-Review-Item">
            <div className="Store-Review-Star">
              {Stars(item.review)}
              <div className="Store-Review-Star-Review">
                <strong>{item.review}</strong>
              </div>
            </div>
            <div className="Store-Review-Etc">
              {item.nickname} | {item.timestamp}
            </div>
            <div className="Store-Review-Content">{item.reviewContent}</div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

function Store(props) {
  const params = window.location.href.split('/');
  const id = params[params.length-1];
  const storeDetail = storage.storeDetail[id-1];

  return (
    <div className="Store">
      <div className="Store-Header-Area">
        <div className="Exit">
          <img src={exit} alt="Exit-Icon" />
        </div>
        <div className="Store-Header-Detail">
          <div className="Store-Header-Detail-Left">
            <div className="Store-name">{storeDetail.name}</div>
            <div className="Store-location">
              {storeDetail.areaDetail} ({storeDetail.areaDong})
            </div>
            <div className="Store-reviews">
              {Stars(storeDetail.review)}
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
        <div className="Store-Dtail-Image">
          {storeDetail.images.map((image, i) => (
            <div key={i} className="ListItem-Slide">
              <div className="ListItem-image-area">
                <img src={image} alt="store-detail" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Store-Menu-Area">
        <div className="Header">대표 메뉴</div>
        <table>
          {Menus(storeDetail.menus)}
        </table>
        <div className="More">
          <div>메뉴 더보기 ＞</div>
        </div>
      </div>
      <div className="Store-Review-Area">
        <div className="Header">리뷰</div>
        <table>
          {Reviews(storeDetail.reviews)}
        </table>
        <div className="More">
          <div>리뷰 더보기 ＞</div>
        </div>
      </div>
      <div className="Store-Status"></div>
    </div>
  );
}

export default Store;
