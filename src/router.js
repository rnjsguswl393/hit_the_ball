import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/Index.vue";
import MapView from "./pages/MapView.vue";
import Login from "./pages/Login.vue";
import Profile from "./pages/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import SignUp from "./pages/SignupForm.vue";
import ListView from "./pages/listView.vue";
import Detail from "./pages/detailView.vue";

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "index",
            components: { default: Index, header: MainNavbar },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/MapView",
            name: "MapView",
            components: {
                default: MapView,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/ListView",
            name: "ListView",
            components: {
                default: ListView,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/login",
            name: "login",
            components: { default: Login, header: MainNavbar },
            props: {
                header: { colorOnScroll: 400 },
            },
        },
        {
            path: "/signup",
            name: "signup",
            components: { default: SignUp, header: MainNavbar },
            props: {
                header: { colorOnScroll: 400 },
            },
        },
        {
            path: "/detail/:Pid",
            name: "detail",
            components: {
                default: Detail,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
            },
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                default: Profile,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
    ],
    scrollBehavior: (to) => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    },
});
