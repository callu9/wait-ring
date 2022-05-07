import React from "react";

import iconNone from "../../image/waitring-none.png";
import iconIncomplete from "../../image/waitring-incomplete.png";
import iconComplete from "../../image/waitring-complete.png";

import Map from "../../component/map/Map";

const ReserveMore = () => {
  return (
    <div className="More">
      <div>지난 예약 내역 ＞</div>
    </div>
  );
};

const ReserveNone = () => {
  return (
    <div className="MyWait-Body-None">
      <div className="MyWait-Body-Icon">
        <img src={iconNone} alt="icon-none" />
      </div>
      <div className="MyWait-Body-Content-None">방문 예약 매장이 없습니다</div>
    </div>
  );
};
const ReserveIncomplete = () => {
  return (
    <div className="MyWait-Body-Incomplete">
      <div className="MyWait-Body-Icon">
        <img src={iconIncomplete} alt="icon-none" />
      </div>
      <div className="MyWait-Body-Content-Incomplete">해당 매장에서 예약 신청을 확인 중입니다</div>
    </div>
  );
};
const ReserveComplete = () => {
  return (
    <div className="MyWait-Body-Complete">
      <div className="MyWait-Body-Icon">
        <img src={iconComplete} alt="icon-none" />
      </div>
      <div className="MyWait-Body-Content-Complete">예약이 완료되었습니다</div>
    </div>
  );
};
const ReserveTable = ({ data = {} }) => {
  return (
    <div className="MyWait-Content">
      <table className="MyWait-Table">
        <tbody>
          <tr className="MyWait-Table-row">
            <td className="left">매장명</td>
            <td className="right" onClick={() => movePage(data.storeId)}>
              {data.storeName}
            </td>
          </tr>
          <tr className="MyWait-Table-row">
            <td className="left">인원</td>
            <td className="right">
              성인 {data.adult}명{data.child > 0 ? " / 아동 " + data.child + "명" : ""}
            </td>
          </tr>
          <tr className="MyWait-Table-row">
            <td className="left">예약일시</td>
            <td className="right">
              <span className="right-orange">{data.reserveDate}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="MyWait-Map">
        <Map
          data={{
            lat: data.storeLocation.lat,
            lng: data.storeLocation.lng,
            marker: { lat: data.storeLocation.lat, lng: data.storeLocation.lng },
          }}
        />
      </div>
    </div>
  );
};

function movePage(id) {
  document.location.pathname = "store/" + id;
}

const Reserve = ({ data = {} }) => {
  if (data.status !== undefined) {
    if (data.status === 1)
      return (
        <>
          <ReserveComplete />
          <ReserveTable data={data} />
          <ReserveMore />
        </>
      );
    else
      return (
        <>
          <ReserveIncomplete />
          <ReserveTable data={data} />
          <ReserveMore />
        </>
      );
  } else
    return (
      <>
        <ReserveNone />
        <ReserveMore />
      </>
    );
};

export default Reserve;
