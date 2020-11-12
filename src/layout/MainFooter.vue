<template>
    <!-- <footer
        class="footer fixed-bottom"
        :class="{ [`footer-${type}`]: type }"
        :data-background-color="white"
        
    > -->
    <!-- <navbar> -->
    <div
        position="fixed"
        bottom="0"
        menu-classes="ml-auto"
        class="footer"
        type="primary"
        :transparent="transparent"
    >
        <!-- <nav class="navbar fixed-bottom" style="margin-bottom:0;"> -->
        <ul style="white-space:nowrap;  overflow:hidden;">
            <li>
                <router-link to="/">
                    <i class="fas fa-home" style="color: #ff8001"></i>
                </router-link>
            </li>

            <li>
                <router-link to="/Mapview">
                    <!-- <i class="far fa-map-marked-alt" style="color: #fc4053"></i> -->
                    <i class="fas fa-map-marker-alt" style="color: #2CA8FF"></i>
                </router-link>
            </li>
            <li>
                <router-link to="/Listview">
                    <i class="fas fa-list" style="color: #fc4053"></i>
                </router-link>
            </li>
            <li>
                <div @click="goBack()">
                    <i class="fas fa-chevron-left" style="color: #2b53a4"></i>
                </div>
            </li>
        </ul>
        <!-- </nav> -->
        <!-- <div class="copyright">
        &copy; {{ year }}, Designed by
        <a href="https:///www.invisionapp.com" target="_blank" rel="noopener"
          >Invision</a
        >. Coded by
        <a href="https://binarcode.com" target="_blank" rel="noopener"
          >BinarCode</a
        >
        and
        <a href="https://www.creative-tim.com" target="_blank" rel="noopener"
          >Creative Tim</a
        >.
      </div> -->

        <!-- </footer> -->
    </div>
    <!-- </navbar> -->
</template>
<script>
    import { Popover } from "element-ui";
    export default {
        props: {
            transparent: Boolean,
            type: String,
        },
        components: {
            [Popover.name]: Popover,
        },
        methods: {
            goBack() {
                window.history.back();
            },
        },
        // data() {
        //     return {
        //         year: new Date().getFullYear(),
        //     };
        // },
    };
</script>
<style></style>
