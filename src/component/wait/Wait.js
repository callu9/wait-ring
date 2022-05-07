import React from "react";

import iconNone from "../../image/waitring-none.png";
import iconIncomplete from "../../image/waitring-incomplete.png";
import iconComplete from "../../image/waitring-complete.png";

import Map from "../../component/map/Map";

const WaitMore = () => {
  return (
    <div className="More">
      <div>지난 웨이팅 내역 ＞</div>
    </div>
  );
};

const WaitNone = () => {
  return (
    <div className="MyWait-Body-None">
      <div className="MyWait-Body-Icon">
        <img src={iconNone} alt="icon-none" />
      </div>
      <div className="MyWait-Body-Content-None">원격 웨이팅 신청한 매장이 없습니다</div>
    </div>
  );
};
const WaitIncomplete = () => {
  return (
    <div className="MyWait-Body-Incomplete">
      <div className="MyWait-Body-Icon">
        <img src={iconIncomplete} alt="icon-none" />
      </div>
      <div className="MyWait-Body-Content-Incomplete">
        해당 매장에서 원격 웨이팅 신청을 확인 중입니다
      </div>
    </div>
  );
};
const WaitComplete = () => {
  return (
    <div className="MyWait-Body-Complete">
      <div className="MyWait-Body-Icon">
        <img src={iconComplete} alt="icon-none" />
      </div>
      <div className="MyWait-Body-Content-Complete">원격 웨이팅 신청이 완료되었습니다</div>
    </div>
  );
};
const WaitTable = ({ data = {} }) => {
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
            <td className="left">대기번호</td>
            <td className="right">
              <span className="right-orange">{data.waitingNum}번 </span>
              {data.waitingBefore > "0" ? (
                <span>({data.waitingBefore}팀 남았어요)</span>
              ) : (
                <span>(곧 입장해요!)</span>
              )}
            </td>
          </tr>
          <tr className="MyWait-Table-row">
            <td className="left">인원</td>
            <td className="right">
              성인 {data.adult}명{data.child > 0 ? " / 아동 " + data.child + "명" : ""}
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

const Wait = ({ data = {} }) => {
  if (data.status !== undefined) {
    if (data.status === 1)
      return (
        <>
          <WaitComplete />
          <WaitTable data={data} />
          <WaitMore />
        </>
      );
    else
      return (
        <>
          <WaitIncomplete />
          <WaitTable data={data} />
          <WaitMore />
        </>
      );
  } else
    return (
      <>
        <WaitNone />
        <WaitMore />
      </>
    );
};

export default Wait;
