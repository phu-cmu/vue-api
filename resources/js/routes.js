import VueRouter from "vue-router";
import VueAxios from 'vue-axios';
import axios from 'axios';
import LoginComponent from './components/Login.vue'

const routes = [
    {
        path: "/register",
        name: "Register",
        component: () => import("./components/Register.vue"),
        meta: {
            title: "Register"
        }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("./components/Login.vue"),
        meta: {
            title: "Login",
            isRedirectIfLoggedIn: false,
        }
    },
    {
        path: "/",
        name: "Dashboard",
        component: () => import("./components/Dashboard.vue"),
        meta: {
            title: "Dashboard",
            isRedirectIfLoggedIn: true,
        }
    },
    {
        path: "/logout",
        name: "Logout",
        component: () => import("./components/Login.vue"),
        meta: {
            isRedirectIfLoggedIn: true
        }
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
const DEFAULT_TITLE = "HRM HTGSOFT";
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});
// Check token khi chuyển route
router.beforeEach((to, _, next) => {
    const token = localStorage.getItem('token')
    if (to.meta.isRedirectIfLoggedIn) {
        if (!token) {
            return next({
                name: 'Login'
            })
        }
    }
    if (to.meta.isRedirectIfLoggedIn === false) {
        if (token) {
            return next({
                name: 'Dashboard'
            })
        }
    }
    return next()
})
export default router;
