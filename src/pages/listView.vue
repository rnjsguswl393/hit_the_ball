<template>
    <div class="header" style="background-image:url('img/header.jpg')">
        <div class="content">
            <div class="menu__links">
                <button class="fillter_1">실내</button>
                <button class="fillter_2">샤워시설</button>
                <button class="fillter_3">주차장</button>
                <button class="fillter_4">헬스장</button>
                <button class="fillter_5">레슨 가능</button>
                <button class="fillter_6">비거리</button>
            </div>

            <div style="height:560px;overflow-y:scroll;margin-bottom:0">
                <!-- 시작 -->

                <div
                    class="card"
                    @click="goTodetail(data.index)"
                    v-for="(data, index) in data"
                    :key="index"
                >
                    <div class="card-header" style="margin:0 auto">
                        {{ data.name }}
                    </div>
                    <div class="card-footer">
                        {{ data.call_num }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import golf from "../../public/연습장.json";
    export default {
        name: "list",
        bodyClass: "list-page",
        data() {
            return {
                // products:ttt.data.products
                data: [],
            };
        },
        mounted() {
            this.callData();
            // console.log(this.data);
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
            goTodetail(prodId) {
                let proId = prodId;
                this.$router.push({ name: "detail", params: { Pid: proId } });
            },
        },
    };
</script>

<style scoped>
    /* .list form {
  max-width: 40em;
  margin: 2em auto;
}
.list form .form-control {
  margin-bottom: 1em;
}
.list form textarea {
  min-height: 20em;
} */
    /* .list{
  height:500px;
} */

    .menu__links {
        display: flex;
        padding: 10px 0px;
        font-weight: bold;
        overflow-x: scroll;
        white-space: nowrap;
        margin-top: 70px;
        position: relative;
    }

    .menu__links button {
        color: white;
        border-radius: 20px;
        margin-right: 15px;
        height: 30px;
        width: auto;
        outline: none;
    }
    .fillter_1 {
        background-color: #fc4053;
        border-color: #fc4053;
    }
    .fillter_2 {
        background-color: #ff8001;
        border-color: #ff8001;
    }
    .fillter_3 {
        background-color: #2b53a4;
        border-color: #2b53a4;
    }
    .fillter_4 {
        background-color: #9954bb;
        border-color: #9954bb;
    }
    .fillter_5 {
        background-color: #28a745;
        border-color: #28a745;
    }
    .fillter_6 {
        background-color: #ec4398;
        border-color: #ec4398;
    }
</style>
