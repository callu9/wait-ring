const { kakao } = window;

export default function KakaoMapScript({ data }) {
  const container = document.getElementById("myMap");
  const options = {
    center:
      data.lat !== undefined && data.lng !== undefined
        ? new kakao.maps.LatLng(data.lat, data.lng)
        : new kakao.maps.LatLng(37.5666805, 126.9784147),
    level: 5,
  };
  const map = new kakao.maps.Map(container, options);
  if (data.marker !== undefined) {
    const markerPosition = new kakao.maps.LatLng(data.marker.lat, data.marker.lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }
}
