<template>
  <div id="app">
    <div id="map"></div>
    <!-- <popup></popup>
     -->
    <section class="menu__body" hidden="hidden">
      <!-- {{ data.innerText }} -->
      <div class="menu__header">
        <label>
          <div></div>

          <!-- <div v-for="(data, i) in data" :key="i">
            {{ data.old_addr }}
          </div> -->
        </label>

        <button type="button" @click="hide()" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="menu__contact">
        <a v-html="data">{{ data }}</a>
      </div>
    </section>
    <div class="menu__overlay" hidden="hidden"></div>

  </div>
</template>

<script>
import golf from '../../public/연습장.json';

// import popup from '../components/popup.vue';
export default {
  
  data() {
    return {
      data: this.iwContent,
      selectedWindow: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4ff9af170258a825316e7777898cd18e';
      document.head.appendChild(script);
    }
  },

  methods: {
    initMap() {
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 5,
      };
      var clickedOverlay = null;
      var map = new kakao.maps.Map(container, options);

      var positions = new Array();
      golf.golfplace.forEach((item) => {
        if (item.latitude || item.longitude) {
          if (item.new_addr == null) {
            item.new_addr = item.old_addr;
          }
          positions.push(item);
        }
      });
      // this.data = positions;
      var infowindows = new Array();
      var markers = new Array();
      var imageSrc =
          'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/146a1df5-f318-4a15-a4ec-69e3733b8957/marker.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201110T144106Z&X-Amz-Expires=86400&X-Amz-Signature=0ec13167a5b9cc515cec07910b93d0612f19d5325ec2c93a87a380cb4615238d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22marker.png%22', // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(36, 38), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(20, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      for (var i = 0; i < positions.length; i++) {
        // 마커를 생성합니다
        var latlng = new kakao.maps.LatLng(
          positions[i].latitude,
          positions[i].longitude,
        );
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: latlng, // 마커를 표시할 위치
          image: markerImage,
        });
        // 생성된 마커를 배열에 담아줍니다.
        markers.push(marker);
        // marker.setMap(map);
        var iwContent =
          '<div> <strong>' +
          positions[i].name +
          '</strong><p>' +
          //positions[i].new_addr+
          (positions[i].new_addr
            ? positions[i].new_addr
            : positions[i].old_addr) +
          '</p></div>';
        //인포윈도우 닫기 버튼
        // var iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          zIndex: 1,
          content: iwContent,
          // removable: iwRemoveable,
        });
        // 생성된 인포윈도우를 배열에 담아줍니다.
        infowindows.push(infowindow);
        // 인포윈도우, 마커 인덱스
        var idx = infowindows.length - 1;

        // 마커에 해당하는 인포윈도우 index를 저장합니다.
        marker.idx = idx;

        kakao.maps.event.addListener(
          marker,
          'click',
          this.clickListener(map, marker, infowindow),
        );
        kakao.maps.event.addListener(marker, 'openLayer', this.openLayer());
        // infowindows[idx].close();
      }
      // map.setCenter(moveLatLon);
      console.log('데이터로딩 끝');
      // console.log(infowindows);
      // console.log(marker.getPosition);
    },
    clickListener(map, marker, infowindow) {
      let vm = this;
      return function () {
        if (vm.selectedWindow == infowindow) {
          return false;
        } else {
          if (!vm.selectedWindow) {
            vm.selectedWindow = infowindow;
          } else {
            vm.selectedWindow.close();
            vm.selectedWindow = infowindow;
          }
          infowindow.open(map, marker);
        }

        kakao.maps.event.trigger(marker, 'openLayer', 'openLayer');
        var pos = marker.getPosition();
        map.panTo(pos);
        vm.data = infowindows.Lf.innerHTML;
        // console.log(infowindows.getContent());
      };
    },
    openLayer() {
      return function () {
        var menu = document.querySelector('.menu__body');

        var overlay = document.querySelector('.menu__overlay');
        // button.setAttribute('hidden', '');
        menu.removeAttribute('hidden');
        overlay.removeAttribute('hidden');
      };
    },
    hide() {
      // var button = document.querySelector(".menu__button");
      var menu = document.querySelector('.menu__body');
      var overlay = document.querySelector('.menu__overlay');
      menu.setAttribute('hidden', '');
      overlay.setAttribute('hidden', '');
      // button.removeAttribute("hidden");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:700');
#map {
  width: 100%;
  height: 633px;
}
.wrap {
  position: absolute;
  left: 10px;
  bottom: -38px;
  max-width: 1000px;
  height: 136px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
  line-height: 1.5;
}
.wrap * {
  padding: 0;
  margin: 0;
}
.wrap .info {
  max-width: 1000px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;
}
.wrap .info:nth-child(1) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.info .title {
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
}
/* .info .close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');
} */
/* .info .close:hover {
  cursor: pointer;
} */
.info .body {
  position: relative;
  overflow: hidden;
}
.info .desc {
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;
}
.desc .ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc .jibun {
  font-size: 11px;
  color: #888;
  margin-top: -2px;
}
.info .img {
  position: absolute;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
}
/* .info:after {
  content: '';
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: 0;
  width: 22px;
  height: 12px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
} */
.info .link {
  color: #5085bb;
}

.menu__overlay {
  width: 380px;
  height: 0px;
  background: rgba(#000, 0.1);
  position: absolute;
  overflow: hidden;
  position: relative;
  z-index: 100;
}

.menu__body {
  display: block;
  width: 100%;
  background: var(--light);
  padding-bottom: 110px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px -9px 50px -30px black;
  font-family: 'Sunflower', 'Montserrat', sans-serif;
  position: absolute;
  bottom: 60px;
  z-index: 105;
  transform: translate3d(var(--x), var(--y), var(--z));
  transition: 0.2s cubic-bezier(0.33, 1, 0.53, 1);
}

.menu__header {
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
}
</style>
