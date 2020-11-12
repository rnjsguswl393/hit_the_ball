<template>
    <div
        class="header"
        style="background-image:url('https://magazine.hankyung.com/magazinedata/images/photo/201302/ae5044939f914d5ea26e352f0a266554.jpg')"
    >
        <div class="content">
            <div v-for="(data, index) in data" :key="index">
                <div
                    v-if="proId == data.index"
                    style="padding:20px 20px  0 20px"
                >
                    <h2
                        style="color:white;margin:60px 0 0 10px;max-width:100%;overflow:scroll;white-space: nowrap;"
                    >
                        {{ data.name }}
                        <!-- <i class="fas fa-phone-square"></i> -->
                    </h2>
                    <div class="detail">상세주소 : {{ data.old_addr }}</div>
                </div>
            </div>
            <div style="height:535px;overflow-y:scroll;margin-bottom:0">
                <!-- 시작 -->
                <!-- 정적지도 -->
                <div
                    id="staticMap"
                    style="width:85%;height:150px;margin:0 auto"
                ></div>

                <div class="btng">
                    <button class="load">길찾기</button>
                    <button class="navi">네비게이션</button>
                    <button class="call">통화 하기</button>
                    <!-- <i class="fas fa-phone-square"></i> -->
                </div>
                <table
                    cellpadding="10px"
                    style="margin: 0 auto; width:310px; border-top: 1px solid #444444;"
                >
                    <tr style="color:white;border-bottom: 1px solid #444444;">
                        <td>이용요금</td>
                        <th>회당시간</th>
                        <th>가격</th>
                    </tr>
                    <tr style="background-color:#ffe7f2">
                        <th>1회</th>
                        <td>60분</td>
                        <td>20,000</td>
                    </tr>
                    <tr style="background-color:#ffd3e7">
                        <th>1개월</th>
                        <td>60분</td>
                        <td>220,000</td>
                    </tr>
                    <tr style="background-color:#ffb6d7">
                        <th>3개월</th>
                        <td>60분</td>
                        <td>600,000</td>
                    </tr>
                </table>

                <br />
                <table
                    cellpadding="10px"
                    style="margin: 0 auto; width:310px; border-top: 1px solid #444444;"
                >
                    <tr style="color:white;border-bottom: 1px solid #444444;">
                        <td>레슨 비용</td>
                        <th>횟수</th>
                        <th>회당 시간</th>
                        <th>가격</th>
                    </tr>
                    <tr style="background-color:#e4d9f8;">
                        <th>1개월</th>
                        <td>주 3회</td>
                        <td>15분</td>
                        <td>200,000</td>
                    </tr>
                    <tr style="background-color:#d6c3f8">
                        <th>3개월</th>
                        <td>주 3회</td>
                        <td>15분</td>
                        <td>500,000</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import golf from "../../public/연습장.json";

    export default {
        name: "details",
        bodyClass: "list-page",

        data() {
            return {
                proId: this.$route.params.Pid,
                title: "details",
                data: [],
            };
        },
        mounted() {
            this.callData();
            if (window.kakao && window.kakao.maps) {
                this.staticMap();
            } else {
                const script = document.createElement("script");
                /* global kakao */

                script.onload = () => kakao.maps.load(this.staticMap);
                script.src =
                    "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4ff9af170258a825316e7777898cd18e";
                document.head.appendChild(script);
            }
        },
        methods: {
            callData() {
                // this.data = new Array();
                golf.golfplace.forEach((item) => {
                    if (item.latitude || item.longitude) {
                        if (item.new_addr == null) {
                            item.new_addr = item.old_addr;
                        }
                        this.data.push(item);
                    }
                });
                // console.log(this.data);
            },
            staticMap() {
                var markerPosition = new kakao.maps.LatLng(
                    37.566826,
                    126.9786567,
                );

                // 이미지 지도에 표시할 마커입니다
                // 이미지 지도에 표시할 마커는 Object 형태입니다
                var marker = {
                    position: markerPosition,
                };

                var staticMapContainer = document.getElementById("staticMap"), // 이미지 지도를 표시할 div
                    staticMapOption = {
                        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 이미지 지도의 중심좌표
                        level: 3, // 이미지 지도의 확대 레벨
                        marker: marker, // 이미지 지도에 표시할 마커
                    };

                // 이미지 지도를 생성합니다
                var staticMap = new kakao.maps.StaticMap(
                    staticMapContainer,
                    staticMapOption,
                );
            },
        },
    };
</script>
<style scoped>
    .detail {
        background-color: rgba(255, 255, 255, 0.5);
        font-weight: bold;
        width: 90%;
        bottom: 0px;
        font-size: 3vw;
        margin: 0 auto;
    }
    .btng {
        width: 300px;
        height: 30px;
        margin: 0 auto;
    }
    .btng button {
        border-radius: 20px;
        color: black;
        min-width: 60px;
        height: 30px;
        text-align: center;
        font-size: 13px;
        float: left;
        padding: 0px;
        margin-left: 5px;
        outline: none;
        margin-left: 30px;
    }
    .load {
        background-color: #fc4053;
        border-color: #fc4053;
    }
    .call {
        background-color: #00d640;
        border-color: #00d640;
    }
    .navi {
        background-color: #2b53a4;
        border-color: #2b53a4;
    }
</style>
