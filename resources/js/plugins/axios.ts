import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import store from "../state";
import router from "../router";
import Swal from "sweetalert2";

Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${window.location.origin}/api`;

// Request interceptor
axios.interceptors.request.use(request => {
    const token = store.getters["token"];
    if (token) {
        request.headers.common["Authorization"] = `Bearer ${token}`;
    }
    // request.headers['X-Socket-Id'] = Echo.socketId()

    return request;
});

// Response interceptor
axios.interceptors.response.use(
    response => response,
    error => {
        const { status } = error.response;

        if (status >= 500) {
            Swal.fire({
                type: "error",
                title: "alert_title",
                text: "error_alert_text",
                reverseButtons: true,
                confirmButtonText: "ok",
                cancelButtonText: "zrusit"
            });
        }

        if (status === 401 && store.getters["auth/check"]) {
            Swal.fire({
                type: "warning",
                title: "test",
                text: "test",
                reverseButtons: true,
                confirmButtonText: "ok",
                cancelButtonText: "zrusit"
            }).then(() => {
                store.commit("auth/LOGOUT");

                router.push({ name: "login" });
            });
        }

        console.log("error", error);

        return Promise.reject(error);
    }
);
