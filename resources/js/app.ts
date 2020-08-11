import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import store from "./state";

import "./plugins";
import "./components";

Vue.config.productionTip = false;
// Vue.config.devtools = false;

new Vue({
    el: "#app",
    router,
    store,
    ...App
});
