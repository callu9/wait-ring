import React, { useEffect } from "react";
import KakaoMapScript from "./KakaoMapScript";

export default function Map(data) {
  useEffect(() => {
    KakaoMapScript(data);
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "100%",
        height: "30vh",
        minHeight: "150px",
        margin: "15px 0 15px 0",
      }}
    ></div>
  );
}
