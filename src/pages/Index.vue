<template>
    <div>
        <div class="page-header clear-filter" filter-color="mint">
            <parallax
                class="page-header-image"
                style="background-image:url('img/header.jpg')"
            >
            </parallax>
            <div class="container">
                <div class="content-center brand">
                    <img class="n-logo" src="img/now-logo.png" alt="" />
                    <h1 class="h1-seo">HIT THE BALL</h1>
                    <h3>PLAY DIFFERENT</h3>
                    <div class="col text-center">
                        <router-link
                            to="/MapView"
                            class="btn btn-primary btn-round btn-lg btn-block"
                        >
                            지도에서 보기
                        </router-link>
                        <router-link
                            to="/ListView"
                            class="btn btn-success btn-round btn-lg btn-block"
                        >
                            리스트로 보기
                        </router-link>
                        <!-- <router-link
                            to="/login"
                            class="btn btn-info btn-round btn-lg btn-block"
                        >
                            로그인하기
                        </router-link> -->
                    </div>
                    <router-link to="/Login">
                        <div class="pull-center">
                            <h6 style="color:white">
                                LOGIN
                            </h6>
                        </div></router-link
                    >
                    <!-- <router-link to="/signup">
                        <div class="pull-right" style="margin-right:30px">
                            <h6 style="color:white">
                                Create Account
                            </h6>
                        </div></router-link
                    > -->
                </div>
                <!-- <h6 class="category category-absolute">
          Designed by
          <a href="http://invisionapp.com/" target="_blank">
            <img src="img/invision-white-slim.png" class="invision-logo" /> </a
          >. Coded by
          <a href="https://www.creative-tim.com" target="_blank">
            <img
              src="img/creative-tim-white-slim2.png"
              class="creative-tim-logo"
            /> </a
          >.
        </h6> -->
            </div>
        </div>
    </div>
</template>
<script>
    import { Parallax } from "@/components";
    import BasicElements from "./components/BasicElementsSection";

    export default {
        name: "index",
        bodyClass: "index-page",
        components: {
            Parallax,
        },
    };
</script>
<style></style>
