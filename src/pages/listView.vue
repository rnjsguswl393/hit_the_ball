<template>
    <div class="section section-examples" data-background-color="black">
        <div
            style="width: 100%;
        height: 100%;"
        >
            <!-- 시작 -->
            <div class="menu__links">
                <button class="fillter_1">실내</button>
                <button class="fillter_2">샤워시설</button>
                <button class="fillter_3">주차장</button>
                <button class="fillter_4">헬스장</button>
                <button class="fillter_5">레슨 가능</button>
                <button class="fillter_6">비거리</button>
            </div>
            <div
                class="card"
                @click="goTodetail(data.index)"
                v-for="(data, index) in data"
                :key="index"
            >
                <!-- <b-card-img
                    :src="data.image"
                    style="height: 130px; width: 130px; float: left; margin-right: 20px"
                ></b-card-img> -->
                <!-- <div
                    class="card-text"
                    style="max-width: 500px; float: left; margin-top: 10px;"
                >
                    <h4 style="float: left;color:black">
                        {{ data.name }}
                    </h4>
                    <br />

                    <p style="float: left;color:black">{{ data.call_num }}</p>
                    <br />
                    <div style="float: left; max-width: 300px">
                        <button type="button" class="btn btn-warning" disabled>
                            샤워장
                        </button>
                        <button type="button" class="btn btn-info" disabled>
                            주차장
                        </button>
                        <button type="button" class="btn btn-success" disabled>
                            레슨
                        </button>
                    </div>
                </div> -->
                <div class="card-header" style="margin:0 auto">
                    {{ data.name }}
                </div>
                <div class="card-footer">
                    {{ data.call_num }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import golf from "../../public/연습장.json";
    export default {
        name: "list",
        data() {
            return {
                // products:ttt.data.products
                data: [],
            };
        },
        mounted() {
            this.callData();
            console.log(this.data);
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
    .list button {
        color: black;
        min-width: 40px;
        height: 20px;
        text-align: center;
        font-size: 13px;
        float: left;
        padding: 0px;
        margin-left: 5px;
    }

    .menu__links {
        display: flex;
        padding: 10px 0px;
        font-weight: bold;
        overflow-x: auto;
        white-space: nowrap;
    }

    .menu__links button {
        color: white;
        border-radius: 20px;
        margin-right: 15px;
        height: 30px;
        min-width: 60px;
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
